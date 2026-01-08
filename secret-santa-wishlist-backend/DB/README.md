## Secret Santa Tracker DB

## Table name: `gifts`
**Table columns**
- id: (BIGINT) - PRIMARY KEY - AUTO INCREMENTS - NOT NULL
- name: VARCHAR(50) - NOT NULL
- image: VARCHAR(150) - NOT NULL
- link: VARCHAR(100) - NOT NULL
- priority: (TINYINT) - NOT NULL
- price: DECIMAL(6,2) - NOT NULL
- notes: (TEXT)
- is_booked: (BOOLEAN) - NOT NULL
- wishlist_id: (BIGINT) - FOREIGN KEY - NOT NULL

## Table name: `wishlists`
**Table columns**
- id: (BIGINT) - PRIMARY KEY - AUTO INCREMENTS - NOT NULL
- name: VARCHAR(50) - NOT NULL
- link: VARCHAR(100) - NOT NULL
- notes: (TEXT)
- token: VARCHAR(50) - NOT NULL
- user_id: (BIGINT) - FOREIGN KEY - NOT NULL

## Table name: `bookings`
**Table columns**
- id: (BIGINT) - PRIMARY KEY - AUTO INCREMENTS - NOT NULL
- message: (TEXT)
- gift_id: (BIGINT) - FOREIGN KEY - NOT NULL
- user_id: (BIGINT) - FOREIGN KEY - NOT NULL

## Table name: `users`
**Table columns**
- id: (BIGINT) - PRIMARY KEY - AUTO INCREMENTS - NOT NULL
- firstname: VARCHAR(50) - NOT NULL
- lastname: VARCHAR(50) - NOT NULL
- phone: VARCHAR(10) - NOT NULL
- mail: VARCHAR(50) - NOT NULL