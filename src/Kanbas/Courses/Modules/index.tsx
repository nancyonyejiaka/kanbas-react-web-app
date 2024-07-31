import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import LessonControlButtons from './LessonControlButtons';
import ModulesControls from './ModulesControls';
import ModuleControlButtons from './ModuleControlButtons';
import * as client from './client';
import { BsGripVertical } from 'react-icons/bs';

export default function Modules() {
  const { number } = useParams();
  const [modules, setModules] = useState<any[]>([]);
  const [moduleName, setModuleName] = useState('');
  const [editing, setEditing] = useState(false);

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(number);
    console.log(modules);
    setModules(modules);
  };
  useEffect(() => {
    fetchModules();
  }, []);

  const createModule = async () => {
    const module = { name: moduleName, course: number };
    const newModule = await client.createModule(number, module);
    setModules([...modules, newModule]);
  };

  const deleteModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    fetchModules();
  };

  const saveModule = async (module: any) => {
    const updatedModule = { ...module, editing: false };
    await client.updateModule(updatedModule);
    setModules(modules.map((m) => (m._id === module._id ? updatedModule : m)));
  };

  const toggleEditModule = (moduleId: string) => {
    setModules(
      modules.map((module) =>
        module._id === moduleId
          ? { ...module, editing: !module.editing }
          : module
      )
    );
  };

  const handleModuleNameChange = (moduleId: string, name: string) => {
    setModules(
      modules.map((module) =>
        module._id === moduleId ? { ...module, name } : module
      )
    );
  };

  return (
    <div id="wd-modules">
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          createModule();
          setModuleName('');
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules &&
          modules.map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                {module.editing && (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      handleModuleNameChange(module._id, e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        saveModule(module);
                      }
                    }}
                    value={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    deleteModule(moduleId);
                  }}
                  toggleEditModule={(moduleId) => toggleEditModule(moduleId)}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
