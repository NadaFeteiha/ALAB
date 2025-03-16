const applications = [
    {
        id: 1,
        userId: 1, // John Doe
        companyId: 4, // Google
        status: "pending",
        position: "Software Engineer",
        applicationDate: "2025-03-01",
        jobLocation: "Mountain View, CA",
        salaryExpectation: 120000
    },
    {
        id: 2,
        userId: 2, // Jane Doe
        companyId: 5, // Facebook
        status: "rejected",
        position: "Data Analyst",
        applicationDate: "2025-02-20",
        jobLocation: "Menlo Park, CA",
        salaryExpectation: 110000
    },
    {
        id: 3,
        userId: 3, // John Smith
        companyId: 3, // Amazon
        status: "accepted",
        position: "Product Manager",
        applicationDate: "2025-01-15",
        jobLocation: "Seattle, WA",
        salaryExpectation: 130000
    },
    {
        id: 4,
        userId: 4, // Alice Johnson
        companyId: 1, // Apple
        status: "pending",
        position: "Software Engineer",
        applicationDate: "2025-03-03",
        jobLocation: "Cupertino, CA",
        salaryExpectation: 125000
    },
    {
        id: 5,
        userId: 5, // Bob Brown
        companyId: 2, // Microsoft
        status: "accepted",
        position: "Data Analyst",
        applicationDate: "2025-02-25",
        jobLocation: "Redmond, WA",
        salaryExpectation: 115000
    },
    {
        id: 6,
        userId: 6, // Charlie Davis
        companyId: 7, // Netflix
        status: "rejected",
        position: "Product Manager",
        applicationDate: "2025-02-10",
        jobLocation: "Los Gatos, CA",
        salaryExpectation: 140000
    },
    {
        id: 7,
        userId: 7, // David Evans
        companyId: 8, // Twitter
        status: "pending",
        position: "Software Engineer",
        applicationDate: "2025-03-05",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 125000
    },
    {
        id: 8,
        userId: 8, // Eve Foster
        companyId: 9, // LinkedIn
        status: "accepted",
        position: "Data Analyst",
        applicationDate: "2025-02-18",
        jobLocation: "Sunnyvale, CA",
        salaryExpectation: 110000
    },
    {
        id: 9,
        userId: 9, // Frank Green
        companyId: 19, // Instagram
        status: "rejected",
        position: "Product Manager",
        applicationDate: "2025-01-30",
        jobLocation: "Menlo Park, CA",
        salaryExpectation: 135000
    },
    {
        id: 10,
        userId: 10, // Grace Harris
        companyId: 19, // Snapchat
        status: "pending",
        position: "Software Engineer",
        applicationDate: "2025-03-02",
        jobLocation: "Santa Monica, CA",
        salaryExpectation: 120000
    },
    {
        id: 11,
        userId: 11, // Hank Irving
        companyId: 22, // TikTok
        status: "accepted",
        position: "Data Analyst",
        applicationDate: "2025-02-12",
        jobLocation: "Los Angeles, CA",
        salaryExpectation: 125000
    },
    {
        id: 12,
        userId: 12, // Ivy Johnson
        companyId: 13, // Pinterest
        status: "rejected",
        position: "Product Manager",
        applicationDate: "2025-01-22",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 130000
    },
    {
        id: 13,
        userId: 13, // Jack King
        companyId: 20, // Reddit
        status: "pending",
        position: "Software Engineer",
        applicationDate: "2025-03-04",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 120000
    },
    {
        id: 14,
        userId: 14, // Karen Lee
        companyId: 21, // Twitch
        status: "accepted",
        position: "Data Analyst",
        applicationDate: "2025-02-28",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 110000
    },
    {
        id: 15,
        userId: 15, // Leo Martin
        companyId: 23, // Spotify
        status: "rejected",
        position: "Product Manager",
        applicationDate: "2025-02-15",
        jobLocation: "New York, NY",
        salaryExpectation: 140000
    },
    {
        id: 16,
        userId: 16, // Mia Nelson
        companyId: 10, // Slack
        status: "pending",
        position: "Software Engineer",
        applicationDate: "2025-03-10",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 120000
    },
    {
        id: 17,
        userId: 17, // Nina Owens
        companyId: 11, // Zoom
        status: "accepted",
        position: "Data Analyst",
        applicationDate: "2025-02-22",
        jobLocation: "San Jose, CA",
        salaryExpectation: 125000
    },
    {
        id: 18,
        userId: 18, // Oscar Perez
        companyId: 14, // Uber
        status: "rejected",
        position: "Product Manager",
        applicationDate: "2025-01-25",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 130000
    },
    {
        id: 19,
        userId: 1, // John Doe
        companyId: 16, // Lyft
        status: "pending",
        position: "Software Engineer",
        applicationDate: "2025-03-07",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 120000
    },
    {
        id: 20,
        userId: 2, // Jane Doe
        companyId: 15, // Airbnb
        status: "accepted",
        position: "Data Analyst",
        applicationDate: "2025-02-18",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 115000
    },
    {
        id: 21,
        userId: 3, // John Smith
        companyId: 17, // DoorDash
        status: "rejected",
        position: "Product Manager",
        applicationDate: "2025-01-18",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 135000
    },
    {
        id: 22,
        userId: 4, // Alice Johnson
        companyId: 18, // Postmates
        status: "pending",
        position: "Software Engineer",
        applicationDate: "2025-03-06",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 120000
    },
    {
        id: 23,
        userId: 5, // Bob Brown
        companyId: 18, // Instacart
        status: "accepted",
        position: "Data Analyst",
        applicationDate: "2025-02-24",
        jobLocation: "San Francisco, CA",
        salaryExpectation: 110000
    },
    {
        id: 24,
        userId: 6, // Charlie Davis
        companyId: 19, // Grubhub
        status: "rejected",
        position: "Product Manager",
        applicationDate: "2025-01-10",
        jobLocation: "Chicago, IL",
        salaryExpectation: 140000
    }
];

module.exports = applications;
