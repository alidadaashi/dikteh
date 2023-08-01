// components/ScreenshotButton.js
import html2canvas from 'html2canvas';
import React from 'react';

const ScreenshotButton = ({ onClose }: { onClose: () => void }) => {
  const handleScreenshot = () => {
    onClose();
    let pageContainer;
    setTimeout(() => {
      pageContainer = document.getElementById('main'); // Replace 'root' with the ID of your root container element
      if (!pageContainer) {
        return;
      }
      html2canvas(pageContainer).then((canvas) => {
        const screenshotUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = screenshotUrl;
        downloadLink.download = 'screenshot.png';
        downloadLink.click();
      });
    }, 500);
  };

  return (
    <button
      className='ml-4 rounded bg-green-700 px-8 py-2 text-base font-semibold text-white hover:bg-green-800'
      onClick={handleScreenshot}
    >
      {' '}
      دانلود کارنامه
    </button>
  );
};

export default ScreenshotButton;
