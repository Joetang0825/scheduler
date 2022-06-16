# Interview Scheduler
Interview Scheduler is a React Application that allows users to book and cancel interviews. Each appointment has one student and one interviewer. The user can create new or update appointments on each day of the week (Mondy to Friday 12pm to 5pm). Also, user can view the list of existing appointments on any day of the week.

## Setup

#### Webpack Development Server
- Fork and clone this repo
- Install dependencies with `npm install`.
- Run Webpack Development Server

#### Scheduler-api server
- Fork and clone api server (https://github.com/lighthouse-labs/scheduler-api)
- Following instruction from its README
- Run api server on a separate terminal 

## Dependencies
- axios
- react
- react-dom
- react-scripts

## Dev Dependencies
- storybook
- @testing-library/react-hooks
- react-test-renderer

## Running Webpack Development Server

```sh
npm start
```

## Running scheduler-api Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Screenshots

#### Show appointment for the day
!["Show appointments for the day"](https://github.com/Joetang0825/scheduler/blob/master/docs/Appointments_for_the_day.png)

#### Create a new appointment
!["Create a new appointment"](https://github.com/Joetang0825/scheduler/blob/master/docs/Create_new_appointment.png)

#### Edit or Delete an appointment
!["Edit or Delete an appointment"](https://github.com/Joetang0825/scheduler/blob/master/docs/Edit_or_Delete_Appointment.png)

#### Confirmation before deleting an appointment
!["Confirmation before deleting an appointment"](https://github.com/Joetang0825/scheduler/blob/master/docs/Delete_Confirmation.png)

