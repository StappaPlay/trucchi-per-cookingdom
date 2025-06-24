/**
 * StappaPlay - Lightweight HTML5 Video Player Utility
 * Author: Paolo
 * License: Custom
 */

class StappaPlay {
    /**
     * Creates a video player inside the specified container.
     * @param {string} containerId - The ID of the container element.
     * @param {string} videoUrl - The URL of the video to play.
     */
    static createPlayer(containerId, videoUrl) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`[StappaPlay] Container with ID '${containerId}' not found.`);
            return;
        }

        const video = document.createElement('video');
        video.src = videoUrl;
        video.controls = true;
        video.style.maxWidth = '100%';
        video.style.height = 'auto';

        container.appendChild(video);

        console.log('[StappaPlay] Video player successfully created.');
    }
}

// Example usage:
// StappaPlay.createPlayer('video-container', 'https://www.w3schools.com/html/mov_bbb.mp4');

module.exports = StappaPlay;
