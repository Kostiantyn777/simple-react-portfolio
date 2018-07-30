import prex_b_360 from './assets/imgs/portfolio/websites/prex_booking_360.jpg';
import prex_b_560 from './assets/imgs/portfolio/websites/prex_booking_560.jpg';
import prex_b_950 from './assets/imgs/portfolio/websites/prex_booking_950.jpg';

import wps_360 from './assets/imgs/portfolio/websites/wps_website_360.jpg';
import wps_560 from './assets/imgs/portfolio/websites/wps_website_560.jpg';
import wps_950 from './assets/imgs/portfolio/websites/wps_website_950.jpg';

import rr_360 from './assets/imgs/portfolio/websites/restaurant_reviews_website_360.jpg';
import rr_560 from './assets/imgs/portfolio/websites/restaurant_reviews_website_560.jpg';
import rr_950 from './assets/imgs/portfolio/websites/restaurant_reviews_website_950.jpg';

import tb_360 from './assets/imgs/portfolio/websites/travel_bus_website_360.jpg';
import tb_560 from './assets/imgs/portfolio/websites/travel_bus_website_560.jpg';
import tb_950 from './assets/imgs/portfolio/websites/travel_bus_website_950.jpg';

import sa_360 from './assets/imgs/portfolio/websites/sakhro_art_website_360.jpg';
import sa_560 from './assets/imgs/portfolio/websites/sakhro_art_website_560.jpg';
import sa_950 from './assets/imgs/portfolio/websites/sakhro_art_website_950.jpg';

import prex_360 from './assets/imgs/portfolio/websites/prex_website_360.jpg';
import prex_560 from './assets/imgs/portfolio/websites/prex_website_560.jpg';
import prex_950 from './assets/imgs/portfolio/websites/prex_website_950.jpg';

export const projects = [
    {
        id: 'prex_booking',
        title: 'PRYKARPATSKYI EXPRESS',
        categories: [
            'development',
            'design'
        ],
        description: `Reservation system for dispatchers which allow to create a booking for specific date and route. Also check/edit/delete existing bookings, print sheet for drivers, add some information about the route, see bookings status for the month and get information about revenues for different carriers, etc.
        System created by using React and Firebase.`,
        img: {
            sm: prex_b_360,
            md: prex_b_560,
            lg: prex_b_950,
            title: 'Laptop on the table'
        },
        url: ''
    },
    {
        id: 'world_poker_school',
        title: 'POKER SCHOOL',
        categories: [
            'development',
            'design'
        ],
        description: `The previous version of this website had a problem with the performance that's why we decided to create a new one. 
        For this task, I used Angular 5 which I connected to the Google Firebase to create Performance Web App. In summary average page load, in relation to the previous version, decreased by 96%.`,
        img: {
            sm: wps_360,
            md: wps_560,
            lg: wps_950,
            title: 'IPhone on the table'
        },
        url: 'https://world-poker-school.com/'
    },
    {
        id: 'restaurant_reviews',
        title: 'RESTAURANT REVIEWS',
        categories: [
            'development',
            'design'
        ],
        description: `This progressive web app was created for Mobile Web Specialist Certification Course.
        The following requirements have been set for the project to be submitted:
        - The application maintains a responsive design on mobile, tablet and desktop viewports. (Mobile first)
        - Images have alternate text, the application uses appropriate focus management for navigation, and semantic elements and ARIA attributes are used correctly.
        - Add a ServiceWorker to cache requests to all of the site’s assets so that any page that has been visited by a user will be accessible when the user is offline. (Offline first)
        - Users are able to mark a restaurant as a favorite, this toggle is visible in the application. A form is added to allow users to add their own reviews for a restaurant. Form submission works properly and adds a new review to the database.
        - The client application works offline. JSON responses are cached using the IndexedDB API. Any data previously accessed while connected is reachable while offline. User is able to add a review to a restaurant while offline and the review is sent to the server when connectivity is re-established.
        - Lighthouse targets for each category exceed:
        -- Progressive Web App: >90
        -- Performance: >90
        -- Accessibility: >90`,
        img: {
            sm: rr_360,
            md: rr_560,
            lg: rr_950,
            title: 'IPhone on the table'
        },
        url: 'https://github.com/Sakhro/restaurant-project'
    },
    {
        id: 'travel_bus',
        title: 'TRAVEL BUS',
        categories: [
            'development',
            'design'
        ],
        description: `Simple website on WordPress with a unique responsive template`,
        img: {
            sm: tb_360,
            md: tb_560,
            lg: tb_950,
            title: 'Laptop and phone on the table'
        },
        url: 'https://travelbus.biz.ua/'
    },
    {
        id: 'sakhro_art',
        title: 'SAKHRO ART',
        categories: [
            'development',
            'design'
        ],
        description: `Simple website using Angular with Firebase`,
        img: {
            sm: sa_360,
            md: sa_560,
            lg: sa_950,
            title: 'Monitor, laptop and phone on the table'
        },
        url: 'http://sakhro-art.com/'
    },
    {
        id: 'prex_website',
        title: 'PRYKARPATSKYI EXPRESS',
        categories: [
            'development',
            'design'
        ],
        description: `Website on WordPress platform for booking a bus tickets`,
        img: {
            sm: prex_360,
            md: prex_560,
            lg: prex_950,
            title: 'Laptop and phone on the table'
        },
        url: 'https://prex.com.ua/'
    }
];