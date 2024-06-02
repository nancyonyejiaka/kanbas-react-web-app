import React from 'react';
import EditorControls from './EditorControls';

export default function AssignmentEditor() {
  return (
    <div
      id="wd-assignments-editor"
      style={{ padding: '1.5rem', fontFamily: 'Arial, sans-serif' }}
    >
      <label htmlFor="wd-name">
        <h6>Assignment Name</h6>
      </label>
      <input
        type="text"
        className="form-control form-control-lg"
        id="wd-name"
        value="A1"
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          width: '100%',
          borderRadius: '0.25rem',
          border: '1px solid #ced4da',
        }}
      />
      <br />
      <textarea
        id="wd-description"
        className="form-control"
        rows={8}
        style={{
          width: '100%',
          padding: '0.5rem',
          fontSize: '1rem',
          borderRadius: '0.25rem',
          border: '1px solid #ced4da',
        }}
      >
        The assignment is available online. Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: - Your full name and section - Links to each of the lab
        assignments - Link to the Kanbas application - Links to all relevant
        source code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />

      <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
        <div style={{ flex: '1', textAlign: 'right', paddingRight: '1rem' }}>
          <label htmlFor="wd-points">Points</label>
        </div>
        <div style={{ flex: '2' }}>
          <input
            type="text"
            className="form-control form-control-lg"
            id="wd-points"
            value={100}
            style={{
              width: '100%',
              padding: '0.5rem',
              fontSize: '1rem',
              borderRadius: '0.25rem',
              border: '1px solid #ced4da',
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
        <div style={{ flex: '1', textAlign: 'right', paddingRight: '1rem' }}>
          <label htmlFor="wd-assignment-group">Assignment Group</label>
        </div>
        <div style={{ flex: '2' }}>
          <select
            className="form-select"
            id="wd-assignment-group"
            style={{
              width: '100%',
              padding: '0.5rem',
              fontSize: '1rem',
              borderRadius: '0.25rem',
              border: '1px solid #ced4da',
            }}
          >
            <option value="ASSIGNMENTS" selected>
              ASSIGNMENTS
            </option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="LABS">LABS</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
        <div style={{ flex: '1', textAlign: 'right', paddingRight: '1rem' }}>
          <label htmlFor="wd-display-grade">Display Grade as</label>
        </div>
        <div style={{ flex: '2' }}>
          <select
            className="form-select"
            id="wd-display-grade"
            style={{
              width: '100%',
              padding: '0.5rem',
              fontSize: '1rem',
              borderRadius: '0.25rem',
              border: '1px solid #ced4da',
            }}
          >
            <option value="PERCENTAGE" selected>
              PERCENTAGE
            </option>
            <option value="NUMBER">NUMBER</option>
            <option value="LETTER">LETTER</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
        <div style={{ flex: '1', textAlign: 'right', paddingRight: '1rem' }}>
          <label htmlFor="wd-submission-type">Submission Type</label>
        </div>
        <div style={{ flex: '2' }}>
          <div
            style={{
              border: '1px solid #ced4da',
              borderRadius: '0.25rem',
              padding: '1rem',
            }}
          >
            <select
              className="form-select"
              id="wd-submission-type"
              style={{
                width: '100%',
                padding: '0.5rem',
                fontSize: '1rem',
                borderRadius: '0.25rem',
                border: '1px solid #ced4da',
              }}
            >
              <option value="ONLINE" selected>
                ONLINE
              </option>
              <option value="IN-PERSON">IN-PERSON</option>
            </select>
            <h6 style={{ marginTop: '1rem' }}>Online Entry Options</h6>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label>
                <input type="checkbox" name="entryOptions" value="textEntry" />{' '}
                Text Entry
              </label>
              <label>
                <input
                  type="checkbox"
                  name="entryOptions"
                  value="websiteUrl"
                  defaultChecked
                />{' '}
                Website URL
              </label>
              <label>
                <input
                  type="checkbox"
                  name="entryOptions"
                  value="mediaRecordings"
                />{' '}
                Media Recordings
              </label>
              <label>
                <input
                  type="checkbox"
                  name="entryOptions"
                  value="studentAnnotation"
                />{' '}
                Student Annotation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="entryOptions"
                  value="fileUploads"
                />{' '}
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
        <div style={{ flex: '1', textAlign: 'right', paddingRight: '1rem' }}>
          <label htmlFor="assignTo">Assign</label>
        </div>
        <div style={{ flex: '2' }}>
          <div
            style={{
              border: '1px solid #ced4da',
              borderRadius: '0.25rem',
              padding: '1rem',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <label
                htmlFor="assignTo"
                style={{ display: 'block', marginBottom: '0.5rem' }}
              >
                <h5>
                  <strong>Assign to</strong>
                </h5>
              </label>
              <select
                className="form-select"
                id="wd-display-grade"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  fontSize: '1rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #ced4da',
                }}
              >
                <option value="EVERYONE" selected>
                  Everyone
                </option>
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label
                htmlFor="dueDate"
                style={{ display: 'block', marginBottom: '0.5rem' }}
              >
                <strong>Due</strong>
              </label>
              <input
                type="datetime-local"
                id="dueDate"
                defaultValue="2024-05-13T23:59"
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  fontSize: '1rem',
                  borderRadius: '0.25rem',
                  border: '1px solid #ced4da',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <div style={{ flex: '1' }}>
                <label
                  htmlFor="availableFrom"
                  style={{ display: 'block', marginBottom: '0.5rem' }}
                >
                  <strong>Available from</strong>
                </label>
                <input
                  type="datetime-local"
                  id="availableFrom"
                  defaultValue="2024-05-06T23:59"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    borderRadius: '0.25rem',
                    border: '1px solid #ced4da',
                  }}
                />
              </div>
              <div style={{ flex: '1' }}>
                <label
                  htmlFor="until"
                  style={{ display: 'block', marginBottom: '0.5rem' }}
                >
                  <strong>Until</strong>
                </label>
                <input
                  type="datetime-local"
                  id="until"
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    fontSize: '1rem',
                    borderRadius: '0.25rem',
                    border: '1px solid #ced4da',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <EditorControls />
    </div>
  );
}
