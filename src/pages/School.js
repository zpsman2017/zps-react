const School = () => {
  return <div>
    <div class="col-12 contentDiv">
      <div class="row top">
        <div class="col-3 filler-top"></div>
        <div class="col-6 headerDiv">
          <h1>This is a showcase of my schoolwork!</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-2 filler-top"></div>
        <div class="col-8 headerDiv">
          <h2>Final Capstone</h2>
          <div class="col-1 filler-top"></div>
          <div class="col-10 paraDiv">
            <p>This was my final capstone project completed for a real client during my senior year. The final deliverable was a website where customers could
              purchase oil for heating buildings that would later be delivered by Atlantic Fuels. Customers could check if their zipcode was in range of delivery,
              and input all neccessary information, including payment data that was not stored by us. Atlantic Fuels and the customer would receieve an email receipt.
              Admins could update the prices of fuel. I was in charge of the Java Spring Boot REST API for communicating with the database.
              This involved CRUD operations of "accounts", "addresses", "products", "zipcodes", and more. Below are screenshots of the frontend and unit testing from a terminal.
              We used React and PHP for the front end and MySQL for the database.
            </p>
          </div>
          <div class="col-12">
            <img src="/images/CapstoneDelivery.png" class="responsiveImg shadow" />
          </div>
          <div class="col-12">
            <img src="/images/CapstoneOrderInfo.png" class="responsiveImg shadow" />
          </div>
          <div class="col-12">
            <img src="/images/CapstoneTesting.png" class="responsiveImg shadow" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-2 filler-top"></div>
        <div class="col-8 headerDiv">
          <h2>Web Services Final Project</h2>
          <div class="col-1 filler-top"></div>
          <div class="col-10 paraDiv">
            <p>This project incorporated lots of communication between APIs, some were my own, some were publicly accessible, some needed OAuth to access them.
              Users could approve the application's access to their own Todoist account where it would look for, or create a project called cities.
              The application would then read from this list and dynamically have pages with information about that city. Weather and location for the city
              would be shown. Users could see and add visits to this city which were read/written from a class-wide database. Laravel and JavaScript were the main languages.
            </p>
          </div>
          <div class="col-12">
            <img src="/images/webServicesFinalProject.png" class="responsiveImg shadow" />
          </div>
          <div class="col-12">
            <img src="/images/webServicesFinalProjectIndianapolis.png" class="responsiveImg shadow" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-2 filler-top"></div>
        <div class="col-8 headerDiv">
          <h2>DevOps Final Project</h2>
          <div class="col-1 filler-top"></div>
          <div class="col-10 paraDiv">
            <p>This goal of this project was to write a script that would spin up n+1 AWS instances and configure 1 as an nginx loadbalancer, and the rest as nginx web servers.
              The script dynamically created an nginx load balancer configuration, ran an Ansible playbook to configure both types of instances,
              cloned a git repo of web pages for the web servers, created a docker container that would be used as a CI/CD runner, and dynamically created .gitlab-ci.yml.
              The docker container watched for any merge requests to a production branch, dynamically created an additional page, and pushed the changes to the running web servers.
            </p>
            <p>This project involved AWS CLI, bash scripting, GitLab CI/CD, YAML, Ansible, Docker, and HTML/CSS.</p>
            <p>Here are screenshots of code snippets.</p>
            <div class="col-12">
              <img src="/images/DevOpsStartSystemScript.png" class="responsiveImg shadow" />
            </div>
            <div class="col-12">
              <img src="/images/DevOpsGitLabCICD.png" class="responsiveImg shadow" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-2 filler-top"></div>
        <div class="col-8 headerDiv">
          <h2>Web Applications Final Project</h2>
          <div class="col-1 filler-top"></div>
          <div class="col-10 paraDiv">
            <p>This project was designed to involve all the skills I had learned in my Web Applications course.
              In order to access the page, users had to sign into my University's Central Authentication Service.
              Users could add and remove "QuickLinks" and "VideoLinks" which would both display on the main page.
              Users could provide a ZIP code and the weather in that area would be shown. To build this project,
              I used HTML, CSS, Bootstrap, AJAX, PHP, SQL, and REST.
            </p>
          </div>
          <div class="col-12">
            <img src="/images/webAppsFinalProject.png" class="responsiveImg shadow" />
          </div>
          <div class="col-12">
            <img src="/images/webAppsFinalProjectQuickLinks.png" class="responsiveImg shadow" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-2 filler-top"></div>
        <div class="col-8 headerDiv">
          <h2>Battleship (Java, MVC)</h2>
          <div class="col-1 filler-top"></div>
          <div class="col-10 paraDiv">
            <p>This was a coding project for my Software Architecture and Design class.
              There was a GUI view and a CLI view. This allowed the user to choose how they want to
              interact with and play the game. I feel pretty good about the design and code quality,
              but I could have made the game a bit better.(It would be nice to have different size ships)
            </p>
          </div>
          <div class="col-6">
            <img src="/images/battleshipCLI.png" class="responsiveImg battleshipImg shadow" id="battleshipCLI" />
          </div>
          <div class="col-6">
            <img src="/images/battleshipGUI.png" class="responsiveImg battleshipImg shadow" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-2 filler-top"></div>
        <div class="col-8 headerDiv">
          <h2>Miami Esports Website</h2>
          <div class="col-1 filler-top"></div>
          <div class="col-10 paraDiv">
            <p>This was a semester long project for my IT Project Management class.
              The focus of the project was responding to and implementing client requirements.
              The site was built with MVC ASP.NET. The responsiveness of the site was one thing that really shined.
              Each team had seperate pages with player pictures and bios.
            </p>
          </div>
          <div class="col-6" >
            <img src="/images/miamiEsportsDesktop.png" class="responsiveImg shadow" id="miamiEsportsDesktop" />
          </div>
          <div class="col-6">
            <img src="/images/miamiEsportsMobile.png" class="responsiveImg shadow" id="miamiEsportsMobile" />
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default School;