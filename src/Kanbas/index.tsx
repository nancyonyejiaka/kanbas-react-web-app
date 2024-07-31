import Account from './Account';
import Dashboard from './Dashboard';
import KanbasNavigation from './Navigation';
import ProtectedRoute from './ProtectedRoute';
import Session from './Account/Session';
import { Routes, Route, Navigate } from 'react-router';
import Courses from './Courses';
import './styles.css';
import * as client from './Courses/client';
import { useEffect, useState } from 'react';
import store from './store';
import { Provider } from 'react-redux';

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const findAllCourses = async () => {
    const courses = await client.fetchAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  function generateCourseNumber(courseName: string) {
    let abbreviation;
    const words = courseName.split(' ');

    if (words.length === 1) {
      abbreviation = courseName.slice(0, 2).toUpperCase();
    } else {
      abbreviation = words
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    }

    const randomFourDigitNumber = Math.floor(1000 + Math.random() * 9000);
    return `${abbreviation}${randomFourDigitNumber}`;
  }

  const [course, setCourse] = useState<any>({
    name: 'New Course',
    number: 'NC123',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
    image: '/images/reactjs.jpg',
    description: 'New Description',
  });

  const addNewCourse = async () => {
    const newCourse = {
      ...course,
      number: generateCourseNumber(course.name), // Generate the course number
    };
    setCourse(newCourse);
    const createdCourse = await client.createCourse(newCourse);
    setCourses([...courses, createdCourse]);
  };

  const deleteCourse = async (courseNum: any) => {
    await client.deleteCourse(courseNum);
    setCourses(courses.filter((course) => course.number !== courseNum));
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c.number === course.number) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas" className="h-100">
          <div className="d-flex h-100">
            <div className="d-none d-md-block bg-black full-height">
              <KanbasNavigation />
            </div>
            <div className="flex-fill p-4">
              <Routes>
                <Route path="/Account/*" element={<Account />} />
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route
                  path="Dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard
                        courses={courses}
                        course={course}
                        setCourse={setCourse}
                        addNewCourse={addNewCourse}
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                      />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="Courses/:number/*"
                  element={
                    <ProtectedRoute>
                      <Courses courses={courses} />{' '}
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </Session>
    </Provider>
  );
}
