import React from 'react';

const ProspectivePage = () => {
  return (
    <section className="prospective fill">
      <div className="container">
        <h2 className="weit-2 col-purp heading_small mb-1 pt-1 ml-4 cap">
          preview of sample dashboard
        </h2>

      </div>

      <div className="container_small ">
        <div className="iframe_container fill mt-2">
          <iframe
            title="power_bi"
            src="https://app.powerbi.com/view?r=eyJrIjoiYjhiZWM0ZmItNjE5Yi00OWZhLTgwYzgtM2YyMzFmNjQ2YzZhIiwidCI6ImM0NjNjMzgwLWY5OGUtNDg1Ny04OTQ2LTZiYjAwMDQyOGJjYSJ9"
            frameBorder="0"
            allowFullScreen={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ProspectivePage;