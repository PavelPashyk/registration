/**
 * @prettier
 */

import React from 'react';

const icons = {
  eyeShown: {
    renderIcon: ({ width, height, fill }) => (
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={width}
        height={height}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.07868 8.3115C1.97402 8.1175 1.97402 7.88216 2.07868 7.68816C3.34002 5.3555 5.67002 3.3335 8.00002 3.3335C10.33 3.3335 12.66 5.3555 13.9214 7.68883C14.026 7.88283 14.026 8.11816 13.9214 8.31216C12.66 10.6448 10.33 12.6668 8.00002 12.6668C5.67002 12.6668 3.34002 10.6448 2.07868 8.3115Z"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.41421 6.58579C10.1953 7.36683 10.1953 8.63316 9.41421 9.41421C8.63316 10.1953 7.36683 10.1953 6.58579 9.41421C5.80474 8.63316 5.80474 7.36683 6.58579 6.58579C7.36683 5.80474 8.63316 5.80474 9.41421 6.58579"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  eyeHidden: {
    renderIcon: ({ width, height, fill }) => (
      <svg
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width={width}
        height={height}
      >
        <path
          d="M8.00002 12.6668C7.43869 12.6668 6.87669 12.5481 6.33069 12.3368"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9213 8.31201C12.66 10.6447 10.33 12.6667 8 12.6667"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.7194 5.94727C13.18 6.4866 13.5894 7.0746 13.9214 7.6886C14.026 7.8826 14.026 8.11793 13.9214 8.31193"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33337 12.6668L12.6667 3.3335"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.51533 9.4849C5.69533 8.6649 5.69533 7.3349 6.51533 6.5149C7.33533 5.6949 8.66533 5.6949 9.48533 6.5149"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3627 4.6375C10.3313 3.8395 9.16535 3.3335 8.00002 3.3335C5.67002 3.3335 3.34002 5.3555 2.07868 7.68883C1.97402 7.88283 1.97402 8.11816 2.07868 8.31216C2.70935 9.47816 3.60668 10.5662 4.63735 11.3635"
          stroke={fill}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  arrow: {
    renderIcon: ({ width, height, fill }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.9999 8.25002V15.75C20.9999 16.1479 20.8419 16.5294 20.5606 16.8107C20.2793 17.092 19.8978 17.25 19.4999 17.25H11.9999V21C12.0004 21.1481 11.957 21.293 11.8753 21.4164C11.7935 21.5399 11.6771 21.6364 11.5406 21.6938C11.402 21.7478 11.251 21.7615 11.105 21.7333C10.959 21.7051 10.824 21.6361 10.7156 21.5344L1.71557 12.5344C1.57474 12.3922 1.49573 12.2002 1.49573 12C1.49573 11.7999 1.57474 11.6078 1.71557 11.4656L10.7156 2.46565C10.824 2.36391 10.959 2.29494 11.105 2.26674C11.251 2.23853 11.402 2.25224 11.5406 2.30627C11.6771 2.36365 11.7935 2.46015 11.8753 2.58361C11.957 2.70706 12.0004 2.85196 11.9999 3.00002V6.75002H19.4999C19.8978 6.75002 20.2793 6.90806 20.5606 7.18936C20.8419 7.47067 20.9999 7.8522 20.9999 8.25002Z"
          fill={fill}
        />
      </svg>
    ),
  },
  home: {
    renderIcon: ({ width, height, fill }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.2079 4.43589C12.1355 4.36663 12.0391 4.32798 11.9389 4.32798C11.8388 4.32798 11.7424 4.36663 11.67 4.43589L2.7175 12.9882C2.67948 13.0246 2.64924 13.0683 2.62859 13.1167C2.60794 13.1651 2.59733 13.2172 2.59739 13.2698L2.59593 21.2964C2.59593 21.7091 2.75988 22.1049 3.05171 22.3967C3.34354 22.6886 3.73934 22.8525 4.15205 22.8525H8.82526C9.03161 22.8525 9.22951 22.7705 9.37543 22.6246C9.52134 22.4787 9.60332 22.2808 9.60332 22.0745V15.461C9.60332 15.3578 9.6443 15.2588 9.71726 15.1859C9.79022 15.1129 9.88917 15.0719 9.99234 15.0719H13.8826C13.9858 15.0719 14.0848 15.1129 14.1577 15.1859C14.2307 15.2588 14.2717 15.3578 14.2717 15.461V22.0745C14.2717 22.2808 14.3536 22.4787 14.4996 22.6246C14.6455 22.7705 14.8434 22.8525 15.0497 22.8525H19.721C20.1337 22.8525 20.5295 22.6886 20.8213 22.3967C21.1132 22.1049 21.2771 21.7091 21.2771 21.2964V13.2698C21.2772 13.2172 21.2666 13.1651 21.2459 13.1167C21.2253 13.0683 21.195 13.0246 21.157 12.9882L12.2079 4.43589Z"
          fill={fill}
        />
        <path
          d="M23.3608 11.3835L19.7234 7.90359V2.62301C19.7234 2.41666 19.6414 2.21875 19.4955 2.07284C19.3496 1.92693 19.1517 1.84495 18.9454 1.84495H16.6112C16.4048 1.84495 16.2069 1.92693 16.061 2.07284C15.9151 2.21875 15.8331 2.41666 15.8331 2.62301V4.17913L13.0166 1.48607C12.753 1.21959 12.361 1.06689 11.9375 1.06689C11.5154 1.06689 11.1244 1.21959 10.8609 1.48656L0.517544 11.3825C0.215074 11.6743 0.177143 12.1542 0.452381 12.4703C0.521498 12.5501 0.606126 12.615 0.701116 12.661C0.796106 12.7071 0.899471 12.7333 1.00492 12.7381C1.11037 12.7429 1.2157 12.7262 1.31449 12.6891C1.41329 12.6519 1.50348 12.595 1.57959 12.5219L11.67 2.87977C11.7424 2.81051 11.8388 2.77186 11.9389 2.77186C12.0391 2.77186 12.1355 2.81051 12.2079 2.87977L22.2993 12.5219C22.4479 12.6644 22.647 12.7422 22.853 12.7382C23.0589 12.7342 23.2548 12.6487 23.3978 12.5005C23.6964 12.1912 23.6716 11.6806 23.3608 11.3835Z"
          fill={fill}
        />
      </svg>
    ),
  },
  rules: {
    renderIcon: ({ width, height, fill }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.0309 4.62015V21.6511H6.27518C5.18913 21.6511 4.31007 20.7707 4.31007 19.686C4.31007 18.6012 5.18913 17.7209 6.27518 17.7209H18.7209V2H5.62015C4.17907 2 3 3.17907 3 4.62015V20.341C3 21.7821 4.17907 22.9612 5.62015 22.9612H21.341V4.62015H20.0309Z"
          fill={fill}
        />
        <path
          d="M6.27663 19.0308C5.91505 19.0308 5.62028 19.3242 5.62028 19.6858C5.62028 20.0474 5.91374 20.3409 6.27532 20.3409H18.7197V19.0308H6.27663Z"
          fill={fill}
        />
      </svg>
    ),
  },
  cross: {
    renderIcon: ({ width, height, fill }) => (
      <svg
        width={width}
        height={height}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 1L1 13M1 1L13 13"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export default icons;
