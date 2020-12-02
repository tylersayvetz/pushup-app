# Pushup app 9000 baby

## Record of changes
- Create repo
- Do user stories
- Create contract
- Make wireframes.
- 

## Big questions
- Should there be many workout rooms or one? One
- Should we try to avoid and kind of persistence? No

## User Stories

- As a user I want to be able to see a list of available exercises
- As a user, I want to be able to add exercises. I must add reps to add the exercise.
- As a user, I want to be able to see which exercises are being performed and the number of reps I need to do to match the exercise leader.
- As a user, if I do more reps than the exercise leader, when I input my reps I should see that I become the leader. 
- As a user, I should be notified whenever reps are inputted by any user.
- Exercises should reset at midnight and be zeroed out. 
- The app should remember exercise names that were used in the past and encourage users to reuse them.
- As a user, I want to be able to create an account, and log in, and log out.

## Future Dreams
- persistence layer enabling analysis of past workout habits in sick graphs bruh
- user accounts 
- multiple workout rooms
    * workout room management system
- some form of proof of exercise completed? hm... (for the masses

)

## Routes
- Post Login
    - `{ "email": string, "password": string }`
    - `{ "error": null | string }`
- Post account
    - `{ "name": string }`
    - `{ "email": string, "password": string }`
    - `{ "error": null | string }`
- Get Reps, returns
    ```javascript 
    [ 
        { 
            exerciseName: <string>, 
            leader: <string>,
            leaderReps: <number>,
            userReps: <number>
        },
        {
            ...
        } 
    ]
- Post Reps
   - Accepts: 
    ```javascript
    {
        exerciseName: <string>,
        reps: <number>
    }
    ```
    - Returns:
   `{ "error": null | string }` 

- Get Exercise Names
    - Returns
    ```javascript
    [
        <string>
    ]

## Data
