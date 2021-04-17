import React from 'react';

const ProspectivePage = () => {
  return (
    <section className="prospective">
      <div className="container">

        <div className="iframe_container fill mt-2">
          <h2 className="weit-2 col-purp heading_small mb-2 pt-1 ml-4 cap">
            preview of sample dashboard
          </h2>
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
