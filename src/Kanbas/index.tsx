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

  const [course, setCourse] = useState<any>({
    _id: '1234',
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
    image: '/images/reactjs.jpg',
    description: 'New Description',
  });
  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = async (courseId: any) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
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
                  path="Courses/:id/*"
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
