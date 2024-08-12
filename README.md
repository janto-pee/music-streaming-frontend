# Music Streaming Startup - Architecture
https://dba.stackexchange.com/questions/298690/database-diagram-for-school-management-app
https://medium.com/@vaibhavkansagara/database-design-of-udemy-66af2d42a03f


## What is Higher Learning Startup (MSP)?
MSP  is a Web-based service that lets users stream songs to their computers or mobile devices. MSP let users download songs for offline playback as well as allow users to upload their own music collection 

 An author’s course display in the listing page and can be seen by the general public (potential students). Courses with high ratings are added to the recommended list. Alternatively, students can register for one or more courses.


## How will we design MSP?
I have divided the design of MSP into four lessons:

Requirements: This lesson will put forth the functional and non-functional requirements of MSP.
Design: This lesson will explain the workflow and usage of each component, API design and database schema.
Detailed design: In this lesson, we’ll explore the components of our MSP design in detail and discuss various approaches to generate timelines. Moreover, we’ll also evaluate our proposed design.
Quiz: This lesson will test our understanding of the MSP design.


## Requirements

We’ll concentrate on some important features of MSP to make this design simple. Let’s list down the requirements for our system:

### Functional requirements
User Management: Enables user registration with unique credentials, robust authentication, and customizable profiles.
Music Catalog Management: Offers extensive browsing of music artists, albums, genres, and tracks for immersive music exploration.
Playlist Creation and Management: Allows users to create, edit, and share playlists with customizable privacy settings.
Like and Favorite Tracking: Lets users express preferences by liking and favoriting tracks, enhancing personalized recommendations.
Premium Features: Provides advanced functionalities like ad-free listening and exclusive content through subscription plans.
Subscription Plans: Offers flexible subscription options with varying tiers and pricing to accommodate user preferences.
Payment Processing: Facilitates secure payment transactions for subscription plans and products, ensuring user privacy and transparency.

### Non-functional requirements#
Scalability: The system should be scalable to handle millions of users in terms of computational resources and storage.

Latency: The latency to generate a course feed should be low.

Availability: The system should be highly available.

Durability Any uploaded content (photos and videos) should never get lost.

Consistency: We can compromise a little on consistency. It is acceptable if the courses takes time to show in followers’ feeds located in a distant region.

Reliability: The system must be able to tolerate hardware and software failures.


## Building blocks we will use#
We’ll focus on the high-level design of MSP. The design will utilize the following building blocks in our design:

A load balancer at various layers will ensure smooth requests distribution among available servers.
A database is used to store the user, students, courses, and accounts metadata and relationship among them.
Blob storage is needed to store the various types of content such as photos, videos, slides and so on.
A task scheduler schedules the events on the database such as removing the entries whose time to live exceeds the limit.
A cache stores the most frequent content related requests.
CDN is used to effectively deliver content to end-users which reduces delay and burden on end-servers.



### High-level design
Our system should allow us to upload, stream songs on their computers or mobile devices at a high level. To stream songs, creators need to upload and store songs and its content, and upon fetching by users, we need to retrieve the data from the storage.

### API design
This section describes APIs invoked by the users to perform different tasks (upload, like, and view courses, create and take test, view progress,  ) on MSP. We’ll implement REST APIs for these tasks. Let’s develop APIs for each of the following features:


    Upload music
    Stream song
    Search songs
    Create paylists
    Like or dislike songs
    Comment on songs
    review artist



All of the following calls will have a userID, that uniquely specifies the user performing the action. We’ll only discuss new parameters in the calls.

#### Upload track
The POST method is used to upload song to the server from the user through the /postSong API. The /postSong API is as follows:

postTrack(userID (ArtistID), Title, ArtistID, AlbumID, Duration, ReleaseDate)

| Parameter | Description |
| ---------------------------------- | ---------------------------------- |
| Title         | It indicates the type of course content. content could be video, pdf or slides.   |
| ArtistID                | The ID of the artist            |
| AlbumID                | The track album             |
| Duration               | The total time of the track              |
| Release               | the track release date            |


#### Search track
The GET method is used to get track from the server through the /searchTrack API. The /searchTrack API is as follows:

searchTrack(keyword)

| Parameter | Description |
| ---------------------------------- | ---------------------------------- |
| keyword               | keyword could be title of course, category or caption        |


#### Create Playlist
The POST method is used to post Playlist to the server from the user through the /postPlaylist API. The /postPlaylist API is as follows:

postPlaylist(userID, track_id, playlist_name, playlist_comment)

| Parameter | Description |
| ---------------------------------- | ---------------------------------- |
| playlist_name        | The name of playlist   |
| playlist_comment             | The description of playlist             |


#### Add Track to Playlist
The POST method is used to add Track to users wishlist through the /postTrackPlaylist API. The /postTrackPlaylist API is as follows:

postTrackPlaylist(userID, track_id, playlist_id)

| Parameter | Description |
| ---------------------------------- | ---------------------------------- |
| track_id         | the id of the track   |
| playlist_id              | the unique id of the playlist              |


#### Create Review
The POST method is used to post Review to the server from the user through the /postReview API. The /postReview API is as follows:

postReview(userID, track_id, rating, review_topic, review_text)

| Parameter | Description |
| ---------------------------------- | ---------------------------------- |
| track_id         | the id of the track.   |
| rating                | Title of each sub topic               |
| review_topic                | Title of review              |
| review_text              | User comment for the purchased course             |


#### View Review
The GET method is used to get Review from the server through the /getReview API. The /getReview API is as follows:

getReview(userID, track_id, reviewID)

| Parameter | Description |
| ---------------------------------- | ---------------------------------- |
| track_id         | The unique ID of the course   |
| reviewID                | the specific ID for each review             |

<!-- 
#### View User Progres (Tracking)
The POST method is used to post photos/videos to the server from the user through the /postCourse API. The /postCourse API is as follows:

getProgress(userID, track_id)

| Parameter | Description |
| ---------------------------------- | ---------------------------------- |
| track_id         | The unique ID of the course   |
 -->



## Storage schema
Let’s define our data model now:

Relational or non-relational database#
It is essential to choose the right kind of database for our MSP system, but which is the right choice — SQL or NoSQL? Our data is inherently relational, and we need an order for the data (posts should appear in chronological order) and no data loss even in case of failures (data durability). Moreover, in our case, we would benefit from relational queries like fetching the followers or images based on a user ID. Hence, SQL-based databases fulfill these requirements.

So, we’ll opt for a relational database and store our relevant data in that database.

### Define tables#
On a basic level, we need the following tables:

Users: This stores all user-related data such as ID, name, email, bio, location, date of account creation, time of the last login, and so on.

album: This stores the relations of the albums. Each track can belong to an album and albums can have many track

track: This stores all music-related information such as title, duration, caption, time of creation, and so on. We also need to keep the user ID to determine which song belongs to which user. The user ID is a foreign key from the users table.

playlist: This stores a list of tracks. We also need to keep the user ID to determine which video belongs to which user. The user ID is a foreign key from the users table.

likes: This stores the amount of time different users click the like button. This is useful for the machine learning recommendation algorithm. We also need to keep the user ID to determine which video belongs to which user. The user ID is a foreign key from the users table.

premium features: This stores the names of all premium features

subscription:  The stores all subscription services such as the name, price and more.


### 1. User: Stores information about registered users.
UserID (Primary Key): It is a unique Identifier for each user.
Username: Username of the user.
Email: Email of the user.
Password: Password of the user.
2. Artist: Contains details about music artists.
ArtistID (Primary Key): Unique Identifier for each artist.
Name: Name of the artist.
Genre: Genre of the artist.
3. Album: Represents music albums.
AlbumID (Primary Key): Unique Identifier for each album.
Title: Title of the album.
ArtistID (Foreign Key): Reference to the artist.
Genre: Genre of the album.
Release Date: Release date of the album.
4. Track: Stores details about individual songs.
TrackID (Primary Key): Unique Identifier for each track.
track
Title: Title of the track.
ArtistID (Foreign Key): Reference to the artist.
AlbumID (Foreign Key): Reference to the album.
Duration: Duration of the track.
Release Date: Release date of the track.
5. Playlist: Represents a collection of tracks curated by a user.
PlaylistID (Primary Key): Unique Identifier for each playlist.
UserID (Foreign Key): Reference to the user.
Title: Title of the playlist.
Creation Date: Creation date of the playlist.
6. Like: Tracks the likes or favorites of users on tracks.
LikeID (Primary Key): Unique Identifier for each like.
UserID (Foreign Key): Reference to the user.
TrackID (Foreign Key): Reference to the track.
7. Premium Feature: Stores information about premium features available to users.
Premium_Feature_ID (Primary Key): Unique Identifier for each premium feature.
Name: Name of the premium feature.
8. Subscription Plan: Contains details about subscription plans offered by the platform.
Subscription_Plan_ID (Primary Key): Unique Identifier for each subscription plan.
Name: Name of the subscription plan.
Price: Price of the subscription plan.
Description: Description of the subscription plan.
9. Payment: Stores information about payments made by users.
Payment_ID (Primary Key): Unique Identifier for each payment.
User_ID (Foreign Key): Reference to the user.
Amount: Amount of the payment.
Date: Date of the payment
Method: Method by which the payment is done.



### Relationships between These Entities
1. User-Playlist Relationship
Each user can create multiple playlists (One-to-Many).
A user is associated with playlists through the UserID foreign key in the Playlist table.
2. Artist-Album Relationship
An artist can have multiple albums (One-to-Many).
Each album is associated with an artist through the ArtistID foreign key in the Album table.
3. Album-Track Relationship
An album can contain multiple tracks (One-to-Many).
Each track belongs to an album through the AlbumID foreign key in the Track table.
4. Track-Playlist Relationship
Each track can be part of multiple playlist and a playlist can contain multiple tracks which signifies the Many-to-Many relationship.
This relationship is realized through a junction table (Track-Playlist) that stores associations between tracks and playlists.
5. User-Premium Feature Relationship
Each user can have access to multiple premium features, and each premium feature can be associated with multiple users (Many-to-Many).
6. User – Subscription Plan Relationship
Each user can subscribe to multiple subscription plans, and each subscription plan can be subscribed to by multiple users (Many-to-Many).
7. User – Payment Relationship
Each user can make multiple payments, and each payment is made by one user (One-to-Many).
UserID in the User table relates to UserID in the Payment table.


CREATE TABLE User (
    UserID INT PRIMARY KEY,
    Username VARCHAR(255),
    Email VARCHAR(255),
    Password VARCHAR(255)
);

CREATE TABLE Artist (
    ArtistID INT PRIMARY KEY,
    Name VARCHAR(255),
    Genre VARCHAR(255)
);

CREATE TABLE Album (
    AlbumID INT PRIMARY KEY,
    Title VARCHAR(255),
    ArtistID INT,
    Genre VARCHAR(255),
    ReleaseDate DATE,
    FOREIGN KEY (ArtistID) REFERENCES Artist(ArtistID)
);

CREATE TABLE Track (
    TrackID INT PRIMARY KEY,
    Title VARCHAR(255),
    ArtistID INT,
    AlbumID INT,
    Duration TIME,
    ReleaseDate DATE,
    FOREIGN KEY (ArtistID) REFERENCES Artist(ArtistID),
    FOREIGN KEY (AlbumID) REFERENCES Album(AlbumID)
);

CREATE TABLE Playlist (
    PlaylistID INT PRIMARY KEY,
    UserID INT,
    Title VARCHAR(255),
    CreationDate DATE,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

CREATE TABLE Like (
    LikeID INT PRIMARY KEY,
    UserID INT,
    TrackID INT,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (TrackID) REFERENCES Track(TrackID)
);

CREATE TABLE PremiumFeature (
    Premium_Feature_ID INT PRIMARY KEY,
    Name VARCHAR(255)
);

CREATE TABLE SubscriptionPlan (
    Subscription_Plan_ID INT PRIMARY KEY,
    Name VARCHAR(255),
    Price DECIMAL(10,2),
    Description TEXT
);

CREATE TABLE Payment (
    Payment_ID INT PRIMARY KEY,
    User_ID INT,
    Amount DECIMAL(10,2),
    Date DATE,
    Method VARCHAR(50),
    FOREIGN KEY (User_ID) REFERENCES User(UserID)
);
















## Detailed Design

### Add more components
Let’s add a few more components to our design:

Load balancer: To balance the load of the requests from the end-users.

Application servers: To host our service to the end-users.

Relational database: To store our data.

Blob storage: To store the photos and videos uploaded by the users.























<!-- 


## Higher Learning Startup - DevOps 
- Time it takes for building multiple environments
- Issues we face with different environments
- Scale-Up and Scale-Down On-Demand

## Higher Learning Startup - DevOps 
- Visibility
- Stability
- Scalability
- Security
- Audit

## Higher Learning Startup - Backend
- Time it takes for building multiple environments
- Issues we face with different environments
- Scale-Up and Scale-Down On-Demand

## Higher Learning Startup - Frontend
- Visibility
- Stability
- Scalability
- Security
- Audit -->