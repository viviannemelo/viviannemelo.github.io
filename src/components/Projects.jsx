import React, { Component } from 'react';

class Projects extends Component {
  state = {
    repos: [],
    currentIndex: 0,
  };

  username = 'viviannemelo';

  componentDidMount() {
    this.fetchGitHubRepos();
  }

  fetchGitHubRepos = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${this.username}/repos`
      );
      const repos = await response.json();
      if (Array.isArray(repos)) {
        const reposWithImage = await Promise.all(
          repos
            .filter((repo) => !repo.fork)
            .map(async (repo) => {
              const imageUrl = `https://raw.githubusercontent.com/${this.username}/${repo.name}/main/cover.png`;
              const res = await fetch(imageUrl);
              return {
                ...repo,
                coverExists: res.ok,
                coverUrl: res.ok ? imageUrl : null,
              };
            })
        );
        this.setState({
          repos: reposWithImage.filter((repo) => repo.coverExists),
        });
      }
    } catch (error) {
      console.error('Error fetching GitHub repos:', error);
    }
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? prevState.repos.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === prevState.repos.length - 1
          ? 0
          : prevState.currentIndex + 1,
    }));
  };

  render() {
    const { repos, currentIndex } = this.state;

    if (repos.length === 0)
      return (
        <p style={{ textAlign: 'center', padding: '2rem', color: '#fff' }}>
          Loading projects...
        </p>
      );

    const total = repos.length;
    const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
    const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;

    const containerStyle = {
      maxWidth: '900px',
      margin: '5rem auto 2rem',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: 'transparent',
      color: '#fff',
    };

    const carouselStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5rem',
    };

    const smallCardStyle = {
      width: '250px',
      cursor: 'pointer',
      opacity: 0.6,
      transition: 'opacity 0.3s',
      textDecoration: 'none',
      color: 'inherit',
    };

    const largeCardStyle = {
      width: '500px',
      cursor: 'pointer',
      boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
      borderRadius: '10px',
      padding: '1rem',
      backgroundColor: 'rgba(255,255,255,0.1)',
      textDecoration: 'none',
      color: '#fff',
    };

    const imgStyleSmall = {
      width: '100%',
      height: '160px',
      objectFit: 'cover',
      borderRadius: '10px',
      marginBottom: '0.5rem',
    };

    const imgStyleLarge = {
      width: '100%',
      height: '280px',
      objectFit: 'cover',
      borderRadius: '10px',
      marginBottom: '1rem',
    };

    const titleStyleLarge = {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '0.8rem',
      textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
    };

    return (
      <section style={containerStyle} aria-label="Projects carousel">
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Projects</h2>

        <div style={carouselStyle}>
          <a
            href={repos[prevIndex].html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={smallCardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            aria-label={`Previous project: ${repos[prevIndex].name}`}
          >
            <img
              src={repos[prevIndex].coverUrl}
              alt={`Cover of ${repos[prevIndex].name}`}
              style={imgStyleSmall}
            />
            <h3>{repos[prevIndex].name}</h3>
          </a>

          <a
            href={repos[currentIndex].html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={largeCardStyle}
            aria-label={`Current project: ${repos[currentIndex].name}`}
          >
            <img
              src={repos[currentIndex].coverUrl}
              alt={`Cover of ${repos[currentIndex].name}`}
              style={imgStyleLarge}
            />
            <h3 style={titleStyleLarge}>{repos[currentIndex].name}</h3>
          </a>

          <a
            href={repos[nextIndex].html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={smallCardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            aria-label={`Next project: ${repos[nextIndex].name}`}
          >
            <img
              src={repos[nextIndex].coverUrl}
              alt={`Cover of ${repos[nextIndex].name}`}
              style={imgStyleSmall}
            />
            <h3>{repos[nextIndex].name}</h3>
          </a>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <button
            onClick={this.prevSlide}
            aria-label="Previous project"
            style={{
              cursor: 'pointer',
              marginRight: '1rem',
              padding: '0.5rem 1rem',
              fontSize: '1.5rem',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#bfe55e',
              color: 'black',
            }}
          >
            &#8592;
          </button>
          <button
            onClick={this.nextSlide}
            aria-label="Next project"
            style={{
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              fontSize: '1.5rem',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#bfe55e',
              color: 'black',
            }}
          >
            &#8594;
          </button>
        </div>
      </section>
    );
  }
}

export default Projects;
