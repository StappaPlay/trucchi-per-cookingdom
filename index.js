/**
 * StappaPlay - Simple HTML5 Audio/Video Player Generator
 * Author: Paolo
 * License: Custom
 */

class StappaPlay {
    constructor(options = {}) {
        this.options = {
            type: options.type || 'audio', // 'audio' or 'video'
            source: options.source || '',
            autoplay: options.autoplay || false,
            controls: options.controls !== false,
            container: options.container || document.body
        };
    }

    render() {
        const element = document.createElement(this.options.type);
        element.src = this.options.source;
        element.autoplay = this.options.autoplay;
        element.controls = this.options.controls;
        element.style.width = '100%';
        
        this.options.container.appendChild(element);
        console.log(`StappaPlay: ${this.options.type} player rendered.`);
        
        return element;
    }
}

// Example Usage:
// const player = new StappaPlay({ type: 'video', source: 'https://example.com/video.mp4' });
// player.render();

module.exports = StappaPlay;
