const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Complete Sales Report",
          "description": "Prepare and finalize the monthly sales report.",
          "date": "2024-12-31",
          "category": "Reports",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Client Follow-Up",
          "description": "Follow up with clients on pending invoices.",
          "date": "2024-12-28",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Schedule Meeting",
          "description": "Schedule the team meeting for project updates.",
          "date": "2024-12-27",
          "category": "Coordination",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Inventory Check",
          "description": "Perform a detailed inventory check for Q4.",
          "date": "2024-12-29",
          "category": "Inventory",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Policy Review",
          "description": "Review and update company policies.",
          "date": "2024-12-30",
          "category": "Policy",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Customer Feedback Analysis",
          "description": "Analyze feedback from customers to identify trends.",
          "date": "2024-12-26",
          "category": "Analysis",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Prepare Training Material",
          "description": "Prepare slides for the training session next week.",
          "date": "2024-12-25",
          "category": "Training",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Budget Adjustment",
          "description": "Adjust Q1 budget based on recent changes.",
          "date": "2024-12-27",
          "category": "Finance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Website Update",
          "description": "Update company website with latest news.",
          "date": "2024-12-29",
          "category": "IT",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Team Building Event",
          "description": "Plan and organize team building activities.",
          "date": "2024-12-28",
          "category": "HR",
          "active": false,
          "newTask": true,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Data Migration",
          "description": "Migrate data to the new cloud platform.",
          "date": "2024-12-26",
          "category": "IT",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Prepare Presentation",
          "description": "Create presentation slides for the board meeting.",
          "date": "2024-12-27",
          "category": "Management",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Weekly Performance Review",
          "description": "Review performance metrics and prepare a summary.",
          "date": "2024-12-25",
          "category": "Performance",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  
  export const  setLocalStorage = () =>{
    
  }