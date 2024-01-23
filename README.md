# Student Dashboard SPA

## Introduction

Welcome to the Student Dashboard Single Page Application (SPA) built with ReactJS! This dashboard is designed to help instructors track student data across various cohorts by season and year. [You can visit the student dashboard via this link!](https://dainty-biscotti-e3f599.netlify.app/)

## Getting Started

To set up and run the Student Dashboard SPA on your local machine, follow these steps:

1. **Backend API**: Utilize the [react-student-dashboard-reboot-server](https://github.com/10-3-pursuit/project-student-dashboard-reboot-server).
2. **Clone the Repository**: `fork` and `clone` the frontend repository to your local machine.

```
git clone https://github.com/AnitaOwen/project-student-dashboard-reboot
```

3. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies.

```
cd project-student-dashboard-reboot

npm install
```

4. **Run the Application Locally**: Start the development server to run the application on your local machine.

```
npm run dev
```

4. **Access the Dashboard**: Open your web browser and go to http://localhost:5173 to access the Student Dashboard SPA.

Now you can explore the student dashboard!

## User Stories

As an instructor, I want to track student data across different cohorts by Season and Year to manage and analyze their progress effectively.

As a user, I want a responsive and visually appealing dashboard layout for a seamless user experience.

As an instructor, I want to easily navigate and filter students by cohorts to focus on specific groups.

As a user, I want a clear indication of the number of students in the displayed cohort.

As a user, I want the ability to sort the cohort list in both ascending and descending orders for better organization.

As a user, I want detailed information about each student, including Codewars stats, scores, certifications, and 1-on-1 notes.

As an instructor, I want an on-track status to quickly assess the overall progress of each student.

## Features

### Static Views:

- **Header**: "Student Dashboard"
- **Footer**: leads the user to a view that displays information about the developers.
- **Aside View**:
  - a unique list of cohorts is continuously shown in the page view.
  - When one of the cohorts is clicked from the cohort list, only those students in the cohort are displayed.
  - The **Student list count** reflects the number of students in the chosen cohort.
  - Button sorts the Aside View List 'Ascending' & 'Descending' when clicked.

### Index View:

- **Student list**: a list of students. Each student is shown with the following details listed:
  - Full Name
  - Email address
  - Birthday
  - Profile photo
- A **student list count** reflects the number of students in the chosen cohort.

### Show View:

- **Additional Student Details Section**

  - Clicking on a student card routes to a detailed view.

  - **Codewars Stats Heading**

    - Current total, last week's total, goal total.
    - Percent of Goal Achieved displayed as percentages.

  - **Scores Heading**

    - Percentages for assignments, projects, and assessments.

  - **Certifications Heading**

    - Icons indicating certification status.

  - **1-on-1 Notes Section** (Form)

    - Input for instructor's name and note.
    - Form submission clears inputs and shows a list of added notes.
    - Notes do not persist on refresh.

  - **On-track status.**
    - Each student is marked as "On Track" or "Off Track" based on specific criteria.
    - A student is "On Track" if **ALL** of the following is true about them:
      - The student has a resume certification.
      - The student has a LinkedIn certification.
      - The student has a GitHub certification.
      - The student has a mock interview certification.
      - The student has a current CodeWars score that is over 850.

### CSS Styling

- Responsive design using Grid and Flex for an optimal layout.

## Stretch Goals

1.  **Enhanced Search Functionality**: As a user, I want to effortlessly find students based on their first or last names.
    - Created search bar functionality for finding students based on first or last names.
2.  **List View**: As a user, I want the option to switch the view to a list of names for a simplified display.
    - Implemented a user-friendly toggle button (List View) that seamlessly switches between the detailed view and a condensed list of student names.

### Contributing

We welcome and appreciate contributions to enhance the Student Dashboard SPA.
