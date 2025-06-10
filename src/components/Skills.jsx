import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="SkillsSection max-w-5xl mx-auto px-6 py-12">
        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Skills</h2>
          <div className="habilidades-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
            {[
              { icon: 'fa-universal-access', label: 'Accessibility Testing' },
              { icon: 'fa-robot', label: 'Automated Testing' },
              { icon: 'fa-sync-alt', label: 'Continuous Improvement' },
              { icon: 'fa-code-branch', label: 'Continuous Integration' },
              { icon: 'fa-bug', label: 'Exploratory & UAT' },
              { icon: 'fa-vial', label: 'Functional Testing' },
              { icon: 'fa-laptop-code', label: 'Mobile & Web Automation' },
              { icon: 'fa-chart-line', label: 'Performance Testing' },
              { icon: 'fa-tasks', label: 'Project Management' },
              { icon: 'fa-users-cog', label: 'Team Enablement' },
            ].map(({ icon, label }, i) => (
              <div className="habilidade-box text-center text-sm" key={i}>
                <i className={`fas ${icon} text-2xl mb-2 text-blue-500`}></i>
                <div>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="technical-skills">
          <h2 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h2>
          <div className="skills-grid grid gap-8">
            {[
              {
                title: 'API & Backend',
                icons: [
                  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
                  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain.svg',
                  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg',
                ],
              },
              {
                title: 'Test Automation',
                icons: [
                  'https://cdn.worldvectorlogo.com/logos/cypress-1.svg',
                  'https://playwright.dev/img/playwright-logo.svg',
                  'https://cdn.worldvectorlogo.com/logos/selenium.svg',
                  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cucumber/cucumber-plain.svg',
                ],
              },
              {
                title: 'Mobile',
                icons: [
                  'https://cdn.worldvectorlogo.com/logos/appium.svg',
                  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg',
                ],
              },
              {
                title: 'Performance',
                icons: [
                  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg',
                  'https://cdn.worldvectorlogo.com/logos/datadog.svg',
                  'https://miro.medium.com/v2/resize:fit:400/1*oldg_V3oCFGTSA9waAa7kg.png',
                ],
              },
              {
                title: 'Programing Languages',
                icons: [
                  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
                  'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
                  'https://cdn.worldvectorlogo.com/logos/python-5.svg',
                  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-plain.svg',
                ],
              },
              {
                title: 'Tools & CI/CD',
                icons: [
                  'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
                  'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
                  'https://cdn.worldvectorlogo.com/logos/jenkins-1.svg',
                  'https://cdn.worldvectorlogo.com/logos/jira-1.svg',
                  'https://cdn.worldvectorlogo.com/logos/confluence.svg',
                ],
              },
            ].map(({ title, icons }, i) => (
              <div className="skill-category" key={i}>
                <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
                <div className="icon-group flex flex-wrap justify-center gap-4">
                  {icons.map((src, idx) => (
                    <img key={idx} src={src} alt={title} className="h-10 w-10 object-contain" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
