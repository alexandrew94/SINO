# Sino
---
(5 days individual project)

![Image of Landing Page](./readme-images/landing-page.png)

## Table of Contents

* [Links](#links)
* [Description](#description)
* [Technologies Used](#technologies-used)
* [Screenshots](#screenshots)
* [Code Examples](#code-examples)
* [Challenges](#challenges)
* [Wins](#wins)

## Link

* [Heroku](https://sino-review.herokuapp.com/)

## Description

**This restaurant review app was made as an opportunity to learn to work with a Node.js backend featuring two RESTful resources. The front-end was styled using Materialize and made use of the Google Static Maps API.**

## Technologies Used

- HTML 5
- CSS 3 (with SASS and Materialize)
- Node.js
- JavaScript
- EJS
- Google Fonts
- Google Static Maps API
- Git & GitHub

## Approach Taken

This project was my first attempt at exploring any sort of back-end technology, and to that end the main challenge was to overcome what had become my comfort zone of writing in vanilla JavaScript.

The app featured three resources: users, restaurants and reviews. Users can log in, post a restaurant and post reviews for restaurants that are not your own. Reviews are then used to calculate an average review for each restaurant.

The app makes use of the Google Static Maps API to produce a map of all the restaurants on the site and to give a map of the location of each site, the location being calculated based on the user-input postcode for each restaurant.

## Screenshots

Main page displaying restaurants:
![Screenshot 1](./readme-images/screenshot1.png)

Show page for a single restaurant:
![Screenshot 2](./readme-images/screenshot2.png)

Viewing a user profile and the restaurants added by that user:
![Screenshot 3](./readme-images/screenshot3.png)

## Code Examples

Here are some of the code snippets in this project that I found the most interesting and challenging to write.

_Example 1: Calculating and displaying the average ratings for each restaurant._

```javascript
<% let totalRatings = 0; %>
<% let numberRatings = 0; %>
<% entry.comments.forEach(comment => { %>
  <% if (comment.rating) { %>
    <% numberRatings++; %>
    <% totalRatings += comment.rating; %>
  <% } %>
<% }) %>
<% let finalRating = Math.round(totalRatings/numberRatings) %>
<% for (let i = 0; i < finalRating; i++) { %>
  <i class="fas fa-star"></i>
<% } %>
<span class="text-lighten-1 grey-text avg-user-rating">(<%- entry.comments.length %> reviews/ratings)</span>
```

This code was used to calculate the average rating for each restaurant. This was fun to write, but maybe in retrospect it would've been better done as a virtual in the backend. A potential improvement might be to do half-stars.

_Example 2: Making a request to the Google Static Maps API._

```javascript
<% let postcodes = "http://maps.googleapis.com/maps/api/staticmap?center=London,UK&zoom=12&size=640x320&"%>
<% databaseEntries.forEach((entry) => { %>
  <% if (!!entry.postcode) { %>
    <% postcodes += "&markers=color:0xe57373%7C" + entry.postcode.split(' ').join(''); %>
  <% } %>
<% }) %>
<% postcodes += '"&key=AIzaSyDH5wP4WVr1VDXiOQroP-i4LFvc2aIp-RM'%>
```

This is far from the most elegant way of making a request to the Google Static Maps API, but it was quite an experience coming up with it since this was my first attempt at using an API of any sort. It used manual concatenation of the strings to make the URL of the image that would appear on the page.

## Challenges

* Working with EJS for the first time
* Working with a back end for the first time
* Working with a database for the first time

## Wins

* Figuring out Google Static Maps
* Learning and using the framework Materialize
