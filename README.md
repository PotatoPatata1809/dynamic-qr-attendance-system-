# dynamic-qr-attendance-system-
The Anti-Proxy Attendance System is a React and Supabase-based web app that uses dynamic QR codes and GPS verification to prevent fake attendance. Teachers start sessions and display live-refreshing QR codes for students to scan. Location checks ensure only nearby students are marked present.

Project Description: Anti-Proxy Attendance System

The Anti-Proxy Attendance System is a real-time, location-aware web application designed to prevent fraudulent attendance marking in educational institutions. Built using React.js for the front-end interface and Supabase (PostgreSQL) as the backend database, the system ensures that attendance is marked only by genuine students physically present in class.

The platform allows teachers to securely log in and initiate an attendance session by specifying the subject, section, and date. Once a session starts, the system automatically generates dynamic QR codes that refresh at fixed intervals. These QR codes encode secure session identifiers and are displayed on the teacher’s screen. Students must scan the live QR code using their attendance app to mark presence. This frequent regeneration of QR codes effectively eliminates the risk of proxy attendance through screenshots or shared links.

To strengthen authenticity, the application captures the student’s GPS location during attendance marking and calculates proximity to the teacher’s location. Attendance is accepted only when the student’s coordinates fall within the predefined radius, ensuring the student is actually present in class. Both successful and failed attempts (due to distance or verification errors) are stored separately in attendance and attendance_failed tables, providing transparent monitoring for administrators.

Teachers can view real-time updates of students marked present or absent, monitor failed attempts, and access detailed logs of past sessions including session time, student data, and generated QR history. The system also integrates duplicate-check triggers at the database level, ensuring that multiple scans from the same student within a session are automatically ignored.

The entire solution operates on serverless architecture, leveraging Supabase’s managed backend and free web hosting services such as Vercel for deployment. This makes the application lightweight, cost-effective, and scalable for schools and universities seeking to automate attendance processes securely and efficiently.

Technologies Used: React.js, Supabase (PostgreSQL), HTML, CSS, JavaScript, QRCode.js, Geolocation API.
