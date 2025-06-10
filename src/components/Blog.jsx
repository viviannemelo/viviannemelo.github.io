import React, { Component } from 'react';

class Blog extends Component {
  state = {
    posts: [],
    currentIndex: 0,
  };

  componentDidMount() {
    this.fetchMediumPosts();
  }

  fetchMediumPosts = async () => {
    try {
      const response = await fetch(
        'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@viviannemelo'
      );
      const data = await response.json();
      if (data.status === 'ok') {
        this.setState({ posts: data.items.slice(0, 7) });
      }
    } catch (error) {
      console.error('Erro ao buscar posts do Medium:', error);
    }
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? prevState.posts.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === prevState.posts.length - 1
          ? 0
          : prevState.currentIndex + 1,
    }));
  };

  trimText = (text, maxLength = 100) => {
    if (!text) return '';
    const cleanText = text.replace(/<[^>]+>/g, ''); // remove tags html
    return cleanText.length > maxLength
      ? cleanText.substring(0, maxLength) + '...'
      : cleanText;
  };

  // Função para extrair imagem da descrição ou fallback
  getImage = (post) => {
    // Tenta pegar do thumbnail ou da primeira img na descrição
    if (post.thumbnail) return post.thumbnail;
    const imgMatch = post.description.match(/<img.*?src="(.*?)"/);
    if (imgMatch) return imgMatch[1];
    // fallback genérico
    return 'https://via.placeholder.com/500x280?text=No+Image';
  };

  render() {
    const { posts, currentIndex } = this.state;

    if (posts.length === 0)
      return <p style={{ textAlign: 'center', padding: '2rem' }}>Loading posts...</p>;

    const total = posts.length;
    const prevIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
    const nextIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;

    const containerStyle = {
        maxWidth: '900px',
        margin: '10rem auto 2rem', // <-- 5rem de espaço acima
        textAlign: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
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

    // const smallCardHover = {
    //   opacity: 1,
    // };

    const largeCardStyle = {
      width: '500px',
      cursor: 'pointer',
      boxShadow: '0 8px 16px rgba(0,0,0,0.25)',
      borderRadius: '10px',
      padding: '1rem',
      backgroundColor: '#fff',
      textDecoration: 'none',
      color: '#222',
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
    };

    const previewStyle = {
      fontSize: '0.9rem',
      color: '#444',
      lineHeight: '1.4',
    };

    return (
      <div style={containerStyle}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Latest Blog Posts</h2>

        <div style={carouselStyle}>
          <a
            href={posts[prevIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            style={smallCardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            aria-label={`Previous post: ${posts[prevIndex].title}`}
          >
            <img
              src={this.getImage(posts[prevIndex])}
              alt={posts[prevIndex].title}
              style={imgStyleSmall}
            />
          </a>

          <a
            href={posts[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            style={largeCardStyle}
            aria-label={`Current post: ${posts[currentIndex].title}`}
          >
            <img
              src={this.getImage(posts[currentIndex])}
              alt={posts[currentIndex].title}
              style={imgStyleLarge}
            />
            <h3 style={titleStyleLarge}>{posts[currentIndex].title}</h3>
            <p style={previewStyle}>
              {this.trimText(posts[currentIndex].description, 150)}
            </p>
          </a>

          <a
            href={posts[nextIndex].link}
            target="_blank"
            rel="noopener noreferrer"
            style={smallCardStyle}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            aria-label={`Next post: ${posts[nextIndex].title}`}
          >
            <img
              src={this.getImage(posts[nextIndex])}
              alt={posts[nextIndex].title}
              style={imgStyleSmall}
            />
          </a>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <button
            onClick={this.prevSlide}
            aria-label="Previous"
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
            aria-label="Next"
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
      </div>
    );
  }
}

export default Blog;
