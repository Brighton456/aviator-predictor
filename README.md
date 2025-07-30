<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title data-i18n="pageTitle">Pro Aviator Predictor APK - Get Started</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Inter:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #E74C3C; /* Red */
            --secondary-color: #F8F8F8; /* Off-white */
            --text-color: #222222; /* Dark black */
            --background-color: #FFFFFF; /* Pure white */
            --border-radius: 12px; /* Slightly more rounded */
            --box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* Stronger shadow */
            --gradient-start: #FF6B6B; /* Lighter red for gradients */
            --gradient-end: #E74C3C; /* Primary red */
        }

        html {
            height: 100%; /* Ensure html takes full height */
        }

        body {
            font-family: 'Inter', sans-serif; /* Changed to Inter for modern feel */
            margin: 0;
            padding: 0; /* Reset body padding */
            line-height: 1.6;
            color: var(--text-color);
            background: linear-gradient(45deg, #f0f0f0, #e0e0e0); /* Subtle gradient background */
            display: flex;
            flex-direction: column; /* Stack children vertically */
            justify-content: flex-start; /* Align content to the top */
            align-items: center; /* Center horizontally */
            min-height: 100vh; /* Ensure body takes full viewport height */
            box-sizing: border-box;
            overflow-x: hidden; /* Prevent horizontal scroll */
            position: relative;
        }

        .container {
            max-width: 1200px;
            width: 100%;
            margin: 2rem auto;
            background-color: var(--background-color);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
            position: relative;
            z-index: 1; /* Ensure content is above background effects */
            padding: 0 1rem; /* Apply horizontal padding to container */
            box-sizing: border-box; /* Include padding in width calculation */
        }

        header {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end)); /* Gradient header */
            color: white;
            text-align: center;
            padding: 3rem 1.5rem;
            position: relative;
            overflow: hidden;
            border-bottom: 5px solid rgba(0,0,0,0.1); /* Subtle separator */
        }

        header h1 {
            margin: 0;
            font-size: 5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Text shadow */
        }

        header h1 .apk-small {
            font-size: 2.5rem;
        }

        header h3 {
            margin-top: 0.5rem;
            font-size: 2.5rem;
            opacity: 0.9;
            font-weight: 400; /* Lighter weight for subtitle */
        }

        header p {
            margin: 0.5rem 0 0;
            font-size: 1.2rem;
            opacity: 0.8;
        }

        .content {
            padding: 2rem;
        }

        .product-section, .payment-section, .features-section, .availability-section, .mpesa-instructions-section, 
        .video-display-section, .testimonials-section, .faq-section, .why-choose-us-section {
            margin-bottom: 2.5rem; /* Increased spacing */
            padding: 1.5rem;
            background-color: #ffffff;
            border-radius: var(--border-radius);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08); /* Lighter shadow for sections */
        }

        h2 {
            font-size: 2.2rem; /* Slightly larger headings */
            color: var(--primary-color);
            border-bottom: 3px solid var(--primary-color); /* Thicker border */
            padding-bottom: 0.7rem;
            margin-bottom: 1.5rem;
            text-align: center; /* Center section titles */
        }
        
        h3 {
            color: white;
            margin-top: 0.5rem;
            font-size: 2.5rem;
            opacity: 0.9;
        }

        ul {
            list-style: none;
            padding: 0;
        }

        ul li {
            background-color: var(--secondary-color);
            margin-bottom: 0.8rem; /* Increased margin */
            padding: 1rem 1.2rem; /* Increased padding */
            border-left: 5px solid var(--primary-color); /* Thicker border */
            border-radius: var(--border-radius);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        ul li:hover {
            transform: translateX(5px); /* Slight slide on hover */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .payment-box {
            background-color: var(--secondary-color);
            border: 2px solid var(--primary-color);
            padding: 2rem; /* More padding */
            border-radius: var(--border-radius);
            text-align: center;
            box-shadow: var(--box-shadow);
        }

        .payment-box .price {
            font-size: 2.8rem; /* Larger price */
            font-weight: bold;
            color: var(--primary-color);
            margin: 0.8rem 0;
            animation: pulse 1.5s infinite alternate; /* Pulsating price */
        }

        @keyframes pulse {
            from { transform: scale(1); }
            to { transform: scale(1.05); }
        }

        .payment-details p {
            font-size: 1.1rem;
            margin: 0.6rem 0;
        }

        .payment-details strong {
            color: var(--primary-color);
        }

        .phone-number-display {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.7rem; /* Increased gap */
            margin-top: 1rem;
        }

        .copy-btn {
            background-color: #555;
            color: white;
            border: none;
            padding: 0.6rem 1rem; /* Larger padding */
            border-radius: 6px; /* Slightly more rounded */
            cursor: pointer;
            font-size: 1rem; /* Larger font */
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .copy-btn:hover {
            background-color: #333;
            transform: translateY(-2px);
        }

        form {
            margin-top: 1.8rem; /* More margin */
            display: flex;
            flex-direction: column;
            gap: 1.2rem; /* Increased gap */
        }

        form label {
            font-weight: bold;
            color: #555;
            font-size: 1.05rem;
        }

        form input[type="text"] {
            width: 100%;
            padding: 1rem; /* Larger input fields */
            border: 1px solid #ccc;
            border-radius: var(--border-radius);
            box-sizing: border-box;
            font-size: 1rem;
        }

        form button {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end)); /* Gradient button */
            color: white;
            border: none;
            padding: 1.2rem; /* Larger button */
            font-size: 1.2rem; /* Larger font */
            font-weight: bold;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        form button:hover {
            background: linear-gradient(to right, #C0392B, #A93226); /* Darker gradient on hover */
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
        
        footer {
            text-align: center;
            padding: 1.5rem;
            background-color: #1A1A1A;
            color: white;
            font-size: 0.9rem;
            border-top: 5px solid rgba(255,255,255,0.1); /* Subtle separator */
        }

        .urgency-banner {
            background: linear-gradient(to right, #FFD700, #FFA500); /* Gold to Orange gradient */
            color: #333;
            padding: 1.2rem 1.5rem;
            text-align: center;
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 2.5rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.8rem;
            flex-wrap: wrap;
        }
        .countdown-timer {
            font-size: 1.3rem;
            color: #8B0000; /* Dark red for timer */
            background-color: rgba(255,255,255,0.3);
            padding: 0.3rem 0.8rem;
            border-radius: 5px;
            font-family: 'Roboto Mono', monospace; /* Monospace font for timer */
        }

        .manual-confirm-btn {
            background-color: #3498DB;
            color: white;
            border: none;
            padding: 0.9rem 1.8rem; /* Larger padding */
            font-size: 1.05rem;
            font-weight: bold;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            margin-top: 1.5rem;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        }

        .manual-confirm-btn:hover {
            background-color: #217DBB;
            transform: translateY(-2px);
            box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }

        .hidden {
            display: none;
        }

        /* Modal Styles (General for all modals) */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.95); /* More opaque white overlay */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .modal-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .modal-content {
            background-color: #FFFFFF;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            width: 90%;
            max-width: 800px;
            padding: 2rem; /* More padding */
            position: relative;
            color: var(--text-color);
            transform: scale(0.9); /* Start smaller for a pop-in effect */
            transition: transform 0.3s ease;
            overflow-y: auto;
            max-height: 90vh;
            text-align: left; /* Default text alignment */
        }

        .modal-overlay.active .modal-content {
            transform: scale(1);
        }

        .modal-close-btn {
            position: absolute;
            top: 15px; /* Adjusted position */
            left: 20px; /* Adjusted position */
            background: none;
            border: none;
            color: #555; /* Darker color for close button */
            font-size: 1.5rem; /* Slightly smaller for better fit with text */
            cursor: pointer;
            z-index: 1001;
            display: flex;
            align-items: center;
            gap: 8px; /* More space */
            padding: 5px 10px; /* Make clickable area larger */
            border-radius: 8px;
            transition: background-color 0.2s ease, color 0.2s ease;
        }
        .modal-close-btn:hover {
            background-color: #f0f0f0;
            color: #333;
        }
        .modal-close-btn svg {
            width: 22px; /* Slightly smaller icon */
            height: 22px;
            fill: currentColor; /* Use current text color */
        }

        /* Specific styles for video modal */
        .video-modal-player-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            margin-bottom: 1.5rem; /* More margin */
            border-radius: var(--border-radius);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .video-modal-player-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }

        .video-interactions {
            display: flex;
            flex-direction: row; /* Always row */
            flex-wrap: wrap; /* Allow wrapping */
            justify-content: center; /* Center buttons horizontally */
            align-items: center;
            margin-top: 1.5rem; /* More margin */
            gap: 1.2rem; /* Increased gap for better spacing */
            border-bottom: 1px solid #eee;
            padding-bottom: 1.5rem;
        }

        .interaction-button {
            background-color: #f0f0f0; /* Lighter gray for buttons */
            color: var(--text-color);
            border: none;
            padding: 0.9rem 1.4rem; /* Larger padding */
            border-radius: 8px; /* More rounded */
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
            display: flex;
            align-items: center;
            gap: 0.6rem; /* More gap for icon and text */
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .interaction-button:hover {
            background-color: #e0e0e0;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .interaction-button.liked {
            background-color: #007bff;
            color: white;
        }

        .interaction-button.subscribed {
            background-color: #28a745;
            color: white;
        }

        /* New styles for like button as thumbnail */
        .like-button-thumbnail {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f0f0f0;
            padding: 0.7rem 1.2rem; /* Adjusted padding */
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            min-width: 90px; /* Wider */
            color: var(--text-color);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .like-button-thumbnail:hover {
            background-color: #e0e0e0;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        }

        .like-button-thumbnail svg {
            width: 30px; /* Larger icon */
            height: 30px;
            margin-bottom: 0.3rem; /* More margin */
            fill: var(--text-color);
        }

        .like-button-thumbnail .like-count {
            font-size: 1rem; /* Larger font */
            font-weight: bold;
            color: #555;
        }

        .like-button-thumbnail.liked {
            background-color: #007bff;
            color: white;
        }

        .like-button-thumbnail.liked svg {
            fill: white;
        }
        .like-button-thumbnail.liked .like-count {
            color: white;
        }

        .video-info-section {
            margin-top: 1.5rem;
            padding-bottom: 1.5rem;
            border-bottom: 1px solid #eee;
        }

        .video-views {
            font-size: 1rem; /* Larger font */
            color: #555;
            margin-bottom: 0.6rem;
        }

        .video-description {
            font-size: 1rem; /* Larger font */
            color: #444;
            line-height: 1.6;
        }

        .developer-note-section {
            margin-top: 2rem; /* More margin */
            padding: 1.2rem; /* More padding */
            background-color: #f0f0f0;
            border-radius: var(--border-radius);
            border: 1px solid #e0e0e0;
            font-size: 0.95rem;
            color: #333;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }
        .developer-note-section h5 {
            margin-top: 0;
            color: var(--primary-color);
            font-size: 1.1rem; /* Larger font */
            margin-bottom: 0.6rem;
        }

        .comment-section {
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid #ccc;
        }

        .comment-section h4 {
            color: var(--text-color);
            font-size: 1.5rem; /* Larger heading */
            margin-bottom: 1rem;
        }

        .comment-input-group {
            display: flex;
            gap: 0.8rem; /* More gap */
            margin-bottom: 1.5rem;
        }

        .comment-input-group input {
            flex-grow: 1;
            padding: 0.8rem; /* More padding */
            border-radius: 8px; /* More rounded */
            border: 1px solid #ccc;
            background-color: #f5f5f5;
            color: var(--text-color);
            font-size: 1rem;
        }

        .comment-input-group button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 0.8rem 1.5rem; /* More padding */
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            font-size: 1rem;
        }

        .comment-input-group button:hover {
            background-color: #C0392B;
            transform: translateY(-2px);
        }

        .comments-list {
            max-height: 450px; /* Increased height for more comments */
            overflow-y: auto;
            border: 1px solid #ddd; /* Lighter border */
            border-radius: var(--border-radius);
            padding: 1rem; /* Increased padding */
            background-color: #fcfcfc;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.05); /* Inner shadow */
        }

        .comment-item {
            padding: 1.2rem 1rem; /* Increased padding */
            border-bottom: 1px solid #eee;
            font-size: 0.95rem;
        }

        .comment-item:last-child {
            border-bottom: none;
        }

        .comment-author {
            font-weight: bold;
            color: var(--primary-color);
            margin-right: 0.6rem;
        }

        .comment-text {
            color: #444;
        }

        .comment-actions {
            display: flex;
            gap: 1.2rem; /* More gap */
            margin-top: 0.6rem;
            font-size: 0.85rem;
            color: #777;
            align-items: center;
        }

        .comment-action-button {
            background: none;
            border: none;
            color: #777;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            transition: color 0.3s ease;
            padding: 5px 8px; /* Make clickable area larger */
            border-radius: 5px;
        }

        .comment-action-button:hover {
            color: #333;
            background-color: #f0f0f0;
        }

        .comment-action-button.liked {
            color: #007bff;
        }

        .comment-action-button svg {
            width: 18px; /* Larger icon */
            height: 18px;
            fill: currentColor;
        }

        .comment-action-button.liked svg {
            fill: #007bff;
        }

        .reply-section {
            margin-top: 1rem;
            margin-left: 2rem; /* More indent */
            border-left: 3px solid #ddd; /* Thicker border */
            padding-left: 1rem;
        }

        .reply-input-group {
            display: flex;
            gap: 0.6rem;
            margin-top: 0.8rem;
        }

        .reply-input-group input {
            flex-grow: 1;
            padding: 0.6rem;
            border-radius: 6px;
            border: 1px solid #ccc;
            background-color: #f5f5f5;
            color: var(--text-color);
            font-size: 0.9rem;
        }

        .reply-input-group button {
            background-color: #aaa;
            color: white;
            border: none;
            padding: 0.6rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
            font-size: 0.9rem;
        }

        .reply-input-group button:hover {
            background-color: #888;
            transform: translateY(-2px);
        }

        /* Video Thumbnail/Preview Styles */
        .video-preview {
            cursor: pointer;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--box-shadow);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            margin-bottom: 1.8rem; /* More spacing */
            position: relative;
        }

        .video-preview:hover {
            transform: translateY(-8px); /* More pronounced lift */
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
        }

        .video-preview img {
            width: 100%;
            height: auto;
            display: block;
        }

        .video-preview-title {
            padding: 1rem; /* More padding */
            background-color: #333;
            color: white;
            font-size: 1.2rem; /* Larger font */
            font-weight: bold;
            text-align: center;
        }

        /* Play Icon Overlay */
        .play-icon-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 70px; /* Larger icon */
            height: 70px;
            background-color: rgba(0, 0, 0, 0.7); /* Darker overlay */
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .video-preview:hover .play-icon-overlay {
            background-color: rgba(0, 0, 0, 0.9);
            transform: translate(-50%, -50%) scale(1.1); /* Slight grow on hover */
        }

        .play-icon-overlay svg {
            fill: white;
            width: 35px; /* Larger play arrow */
            height: 35px;
        }

        /* WhatsApp Prompt Modal Specific Styles */
        #whatsappPromptModal .modal-content {
            max-width: 450px; /* Wider */
            text-align: center;
            padding-top: 3.5rem;
        }
        #whatsappPromptModal .modal-content h4 {
            margin-top: 0;
            color: var(--primary-color);
            font-size: 1.8rem;
        }
        #whatsappPromptModal .modal-content input[type="text"] {
            margin-bottom: 1.2rem;
            padding: 1rem;
        }
        #whatsappPromptModal .modal-content button {
            width: 100%;
            padding: 1rem;
            font-size: 1.1rem;
        }

        /* Payment Modal Specific Styles */
        #paymentModal .modal-content {
            max-width: 600px; /* Wider */
            padding-top: 3.5rem;
        }
        #paymentModal .modal-content .payment-box {
            background-color: var(--secondary-color);
            border: 2px solid var(--primary-color);
            padding: 2rem;
            border-radius: var(--border-radius);
            text-align: center;
        }
        #paymentModal .modal-content .price {
            font-size: 2.8rem;
            font-weight: bold;
            color: var(--primary-color);
            margin: 0.8rem 0;
        }
        #paymentModal .modal-content .payment-details p {
            font-size: 1.1rem;
            margin: 0.6rem 0;
        }
        #paymentModal .modal-content .payment-details strong {
            color: var(--primary-color);
        }
        #paymentModal .modal-content .phone-number-display {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.7rem;
        }
        #paymentModal .modal-content .mpesa-instructions-section {
            margin-top: 2rem;
            text-align: left;
        }
        #paymentModal .modal-content .mpesa-instructions-section h2 {
            font-size: 1.8rem;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 0.5rem;
        }
        #paymentModal .modal-content .mpesa-steps li {
            background-color: #f5f5f5;
            margin-bottom: 0.6rem;
            padding: 0.8rem 1rem;
            border-left: 4px solid var(--primary-color);
            border-radius: var(--border-radius);
        }

        @media (max-width: 768px) {
            .container {
                margin: 1rem auto; /* Adjust margin for smaller screens */
                padding: 0 0.5rem; /* Less padding on very small screens */
            }
            header h1 {
                font-size: 3rem;
            }
            header h1 .apk-small {
                font-size: 1.5rem;
            }
            h3 {
                font-size: 1.5rem;
            }
            .content {
                padding: 1rem;
            }
            h2 {
                font-size: 1.8rem;
            }
            .urgency-banner {
                font-size: 1rem;
                padding: 0.8rem 1rem;
                flex-direction: column; /* Stack timer and text on small screens */
            }
            .countdown-timer {
                font-size: 1.1rem;
            }
            .modal-content {
                width: 95%;
                padding: 1.5rem;
            }
            /* Removed flex-direction: column; for .video-interactions here */
            .interaction-button, .like-button-thumbnail {
                width: auto; /* Allow buttons to size naturally within flex-wrap */
                flex-grow: 1; /* Allow buttons to grow to fill space if needed */
                max-width: 48%; /* Limit width to allow two per row */
                justify-content: center; /* Center content in buttons */
            }
            .advertisement-modal-overlay {
                bottom: 10px;
                right: 10px;
                left: 10px;
                justify-content: center;
                align-items: center;
            }
            .advertisement-modal-content {
                max-width: 90%;
                width: 100%;
            }
        }

        /* Custom Message Box Styles */
        .message-box-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.4); /* Slightly darker overlay */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .message-box-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .message-box-content {
            background-color: #fff;
            padding: 25px; /* More padding */
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            text-align: center;
            max-width: 350px; /* Wider */
            width: 85%;
            transform: translateY(-30px); /* More pronounced pop-in */
            transition: transform 0.3s ease;
        }

        .message-box-overlay.active .message-box-content {
            transform: translateY(0);
        }

        .message-box-content p {
            margin: 0 0 20px 0; /* More margin */
            font-size: 1.15rem; /* Larger font */
            color: var(--text-color);
        }

        .message-box-content button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 20px; /* Larger button */
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.05rem;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .message-box-content button:hover {
            background-color: #C0392B;
            transform: translateY(-2px);
        }

        /* Report Modal Specific Styles */
        #reportModal .modal-content {
            max-width: 550px;
            text-align: center;
            padding-top: 3.5rem;
        }
        #reportModal .modal-content h4 {
            margin-top: 0;
            color: var(--primary-color);
            font-size: 1.8rem;
        }
        #reportModal .modal-content textarea {
            width: calc(100% - 30px); /* Adjust for padding */
            padding: 15px; /* More padding */
            margin-top: 20px; /* More margin */
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: var(--border-radius);
            resize: vertical;
            min-height: 100px; /* Taller */
            font-size: 1rem;
        }
        #reportModal .modal-content .report-actions {
            display: flex;
            justify-content: center;
            gap: 15px; /* More gap */
            margin-top: 20px;
        }
        #reportModal .modal-content .report-actions button {
            flex-grow: 1;
            padding: 12px 20px; /* Larger buttons */
            font-size: 1.05rem;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }
        #reportModal .modal-content #confirmReportBtn {
            background-color: var(--primary-color);
            color: white;
            border: none;
        }
        #reportModal .modal-content #confirmReportBtn:hover {
            background-color: #C0392B;
            transform: translateY(-2px);
        }
        #reportModal .modal-content #cancelReportBtn {
            background-color: #ccc;
            color: var(--text-color);
            border: none;
        }
        #reportModal .modal-content #cancelReportBtn:hover {
            background-color: #bbb;
            transform: translateY(-2px);
        }

        /* Advertisement Modal Styles */
        .advertisement-modal-overlay {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1500;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            pointer-events: none;
        }

        .advertisement-modal-overlay.active {
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
        }

        .advertisement-modal-content {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            padding: 20px; /* More padding */
            max-width: 320px; /* Wider */
            position: relative;
            text-align: center;
            transform: translateY(30px); /* More pronounced pop-in */
            transition: transform 0.3s ease;
        }

        .advertisement-modal-overlay.active .advertisement-modal-content {
            transform: translateY(0);
        }

        .advertisement-close-btn {
            position: absolute;
            top: 8px; /* Adjusted position */
            right: 12px;
            background: none;
            border: none;
            font-size: 1.8rem; /* Larger close icon */
            cursor: pointer;
            color: #888;
            transition: color 0.2s ease;
        }

        .advertisement-close-btn:hover {
            color: #333;
        }

        .advertisement-modal-content p {
            margin: 0 0 15px 0; /* More margin */
            font-size: 1rem; /* Larger font */
            color: var(--text-color);
        }

        .advertisement-buy-now-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 10px 20px; /* Larger button */
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .advertisement-buy-now-btn:hover {
            background-color: #C0392B;
            transform: translateY(-2px);
        }

        /* Exit Intent Modal Styles */
        .exit-intent-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8); /* Even darker overlay */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2500;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .exit-intent-modal-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .exit-intent-modal-content {
            background-color: #FFFFFF;
            border-radius: var(--border-radius);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4); /* Stronger shadow */
            width: 90%;
            max-width: 550px; /* Wider */
            padding: 2.5rem; /* More padding */
            text-align: center;
            transform: translateY(-60px); /* More pronounced pop-in */
            transition: transform 0.3s ease;
        }

        .exit-intent-modal-overlay.active .exit-intent-modal-content {
            transform: translateY(0);
        }

        .exit-intent-modal-content h4 {
            color: var(--primary-color);
            font-size: 2.2rem; /* Larger heading */
            margin-bottom: 1.2rem;
        }

        .exit-intent-modal-content p {
            font-size: 1.2rem; /* Larger font */
            color: var(--text-color);
            margin-bottom: 1.8rem;
        }

        .exit-intent-modal-content .price {
            font-size: 3rem; /* Much larger price */
            font-weight: bold;
            color: #28a745; /* Green for special offer */
            margin-bottom: 2rem;
            animation: pulse 1.5s infinite alternate; /* Pulsating price */
        }

        .exit-intent-modal-actions {
            display: flex;
            flex-direction: column;
            gap: 1.2rem; /* More gap */
        }

        .exit-intent-modal-actions button {
            padding: 1.2rem; /* Larger buttons */
            font-size: 1.2rem;
            font-weight: bold;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;
            border: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .exit-intent-modal-actions .stay-btn {
            background: linear-gradient(to right, var(--gradient-start), var(--gradient-end));
            color: white;
        }

        .exit-intent-modal-actions .stay-btn:hover {
            background: linear-gradient(to right, #C0392B, #A93226);
            transform: translateY(-3px);
        }

        .exit-intent-modal-actions .leave-btn {
            background-color: #ccc;
            color: var(--text-color);
        }

        .exit-intent-modal-actions .leave-btn:hover {
            background-color: #bbb;
            transform: translateY(-2px);
        }

        /* Testimonials Section Specific Styles */
        .testimonials-section {
            text-align: center;
        }
        .testimonial-carousel {
            position: relative;
            overflow: hidden;
            width: 100%;
            margin: 1.5rem auto;
            border-radius: var(--border-radius);
            box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
            background-color: #fcfcfc;
            padding: 1rem 0;
        }
        .testimonial-track {
            display: flex;
            transition: transform 0.5s ease-in-out;
        }
        .testimonial-item {
            min-width: 100%; /* Each item takes full width */
            box-sizing: border-box;
            padding: 1.5rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .testimonial-text {
            font-style: italic;
            margin-bottom: 1rem;
            font-size: 1.1rem;
            color: #555;
        }
        .testimonial-author {
            font-weight: bold;
            color: var(--primary-color);
            font-size: 1rem;
        }
        .carousel-nav {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            box-sizing: border-box;
            pointer-events: none; /* Allow clicks to pass through */
        }
        .carousel-nav button {
            background-color: rgba(0,0,0,0.5);
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
            cursor: pointer;
            pointer-events: auto; /* Make buttons interactive */
            transition: background-color 0.3s ease, transform 0.2s ease;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .carousel-nav button:hover {
            background-color: rgba(0,0,0,0.7);
            transform: scale(1.1);
        }
        .testimonial-form-section {
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid #eee;
            text-align: left;
        }
        .testimonial-form-section h4 {
            text-align: center;
            margin-bottom: 1rem;
            color: var(--text-color);
        }
        .testimonial-form-section textarea {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 1rem;
            border: 1px solid #ccc;
            border-radius: 8px;
            resize: vertical;
            min-height: 80px;
            font-size: 1rem;
        }
        .testimonial-form-section button {
            width: auto;
            padding: 10px 20px;
            font-size: 1rem;
            align-self: flex-end; /* Align button to the right */
        }

        /* FAQ Section Specific Styles */
        .faq-section {
            text-align: center;
        }
        .faq-item {
            background-color: #fcfcfc;
            border: 1px solid #eee;
            border-radius: var(--border-radius);
            margin-bottom: 1rem;
            overflow: hidden;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 1.5rem;
            background-color: #f0f0f0;
            cursor: pointer;
            font-weight: bold;
            color: var(--text-color);
            font-size: 1.05rem;
            transition: background-color 0.3s ease;
        }
        .faq-question:hover {
            background-color: #e0e0e0;
        }
        .faq-question .arrow {
            font-size: 1.5rem;
            transition: transform 0.3s ease;
        }
        .faq-item.active .faq-question .arrow {
            transform: rotate(180deg);
        }
        .faq-answer {
            padding: 0 1.5rem;
            background-color: #ffffff;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
            color: #555;
            font-size: 0.95rem;
            text-align: left;
        }
        .faq-item.active .faq-answer {
            max-height: 200px; /* Adjust as needed */
            padding: 1rem 1.5rem;
        }
        .faq-search-container {
            margin-bottom: 1.5rem;
            display: flex;
            justify-content: center;
        }
        .faq-search-container input {
            width: 80%;
            max-width: 400px;
            padding: 0.8rem 1rem;
            border: 1px solid #ccc;
            border-radius: var(--border-radius);
            font-size: 1rem;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
        }

        /* Why Choose Us Section */
        .why-choose-us-section {
            text-align: center;
        }
        .why-choose-us-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        .why-choose-us-item {
            background-color: var(--secondary-color);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .why-choose-us-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0,0,0,0.15);
        }
        .why-choose-us-item svg {
            width: 50px;
            height: 50px;
            fill: var(--primary-color);
            margin-bottom: 1rem;
        }
        .why-choose-us-item h5 {
            font-size: 1.2rem;
            color: var(--text-color);
            margin-bottom: 0.5rem;
        }
        .why-choose-us-item p {
            font-size: 0.95rem;
            color: #666;
        }

        /* Language Switcher */
        .language-switcher {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 10;
            background-color: rgba(255,255,255,0.8);
            border-radius: 8px;
            padding: 5px 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .language-switcher select {
            border: none;
            background: transparent;
            font-family: 'Inter', sans-serif;
            font-size: 0.9rem;
            color: var(--text-color);
            cursor: pointer;
            padding: 5px;
        }

        /* Scroll-to-top button */
        #scrollToTopBtn {
            display: none; /* Hidden by default */
            position: fixed; /* Fixed/sticky position */
            bottom: 30px; /* Place the button at the bottom of the page */
            right: 30px; /* Place the button at the right side */
            z-index: 99; /* Make sure it does not overlap */
            border: none; /* Remove borders */
            outline: none; /* Remove outline */
            background-color: var(--primary-color); /* Set a background color */
            color: white; /* Text color */
            cursor: pointer; /* Add a mouse pointer on hover */
            padding: 15px; /* Some padding */
            border-radius: 50%; /* Rounded corners */
            font-size: 1.5rem; /* Increase font size */
            box-shadow: var(--box-shadow);
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        #scrollToTopBtn:hover {
            background-color: #C0392B; /* Darker red on hover */
            transform: translateY(-3px);
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <div class="language-switcher">
                <select id="language-select">
                    <option value="en">English</option>
                    <option value="sw">Kiswahili</option>
                </select>
            </div>
            <h1 data-i18n="mainTitle">Pro Aviator Predictor <span class="apk-small">APK</span></h1>
            <h3 data-i18n="subtitle">Latest version MQ2#XCVK</h3>
            <p style="margin-top: 1.5rem; font-size: 1rem; opacity: 0.9;" data-i18n="headerIntro">
                Introducing the **New, Upgraded Version** of the Aviator Predictor App! We've enhanced stability and performance after the previous version experienced massive traffic. Get ready for an even smoother experience.
            </p>
        </header>

        <div class="content">
            <div class="urgency-banner">
                <span data-i18n="urgencyText">⚡️ **LIMITED-TIME OPPORTUNITY!** Get your Pro Aviator Predictor APK now. Don't miss out on this enhanced version!</span>
                <span class="countdown-timer" id="countdownTimer"></span>
            </div>

            <div class="product-section">
                <h2 data-i18n="aboutTitle">About the Pro Aviator Predictor APK</h2>
                <p data-i18n="aboutPara1">Aviator Predictor APK is a powerful utility application designed to give you a strategic advantage in the popular and challenging Aviator game. Developed on a solid mathematical model, this app provides data-driven predictions and analysis to help you make smarter, more informed decisions, moving beyond pure luck.</p>
                <p data-i18n="aboutPara2">The app focuses on providing intelligent predictions based on data and algorithms, not a "magic key" to victory. It's a tool to complement your skill and understanding of the game, helping you optimize your chances of winning.</p>
            </div>

            <div class="why-choose-us-section">
                <h2 data-i18n="whyChooseUsTitle">Why Choose Our Predictor?</h2>
                <div class="why-choose-us-grid">
                    <div class="why-choose-us-item">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                        <h5 data-i18n="whyChoose1Title">Precision Algorithms</h5>
                        <p data-i18n="whyChoose1Desc">Our app uses advanced algorithms to analyze game patterns and provide highly accurate predictions.</p>
                    </div>
                    <div class="why-choose-us-item">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                        <h5 data-i18n="whyChoose2Title">User-Friendly Interface</h5>
                        <p data-i18n="whyChoose2Desc">Designed for ease of use, ensuring a seamless experience for both new and experienced players.</p>
                    </div>
                    <div class="why-choose-us-item">
                        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                        <h5 data-i18n="whyChoose3Title">Constant Updates</h5>
                        <p data-i18n="whyChoose3Desc">We regularly update our app to adapt to game changes and improve prediction accuracy.</p>
                    </div>
                </div>
            </div>

            <div class="video-display-section">
                <h2 data-i18n="videoTitle">Watch Our Videos</h2>
                <p style="text-align: center; margin-top: 1rem; font-size: 0.95rem; color: #555;" data-i18n="videoInstruction">
                    Click on any video below to watch it in a full-screen, interactive player.
                </p>

                <!-- Video 1 Preview -->
                <div class="video-preview" data-video-id="9smQbuPXsf8" data-start-time="13" data-video-title-en="Aviator Predictor for Beginners – 2025 Tutorial" data-video-title-sw="Mafunzo ya Aviator Predictor kwa Wanaoanza – 2025">
                    <img src="https://img.youtube.com/vi/9smQbuPXsf8/hqdefault.jpg" alt="Video Thumbnail">
                    <div class="play-icon-overlay">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div class="video-preview-title" data-i18n="video1PreviewTitle">Live Performance Streaming</div>
                </div>
                <p style="text-align: center; margin-top: 0.5rem; font-size: 0.85rem; color: #777;" data-i18n="videoNote">
                    *Please note: The video may appear blurred in some areas for privacy and security purposes.*
                </p>

                <!-- Video 2 Preview -->
                <div class="video-preview" data-video-id="hF4hqebVrx4" data-start-time="10" data-video-title-en="Another Aviator Predictor Live Demonstration" data-video-title-sw="Onyesho Lingine la Moja kwa Moja la Aviator Predictor">
                    <img src="https://img.youtube.com/vi/hF4hqebVrx4/hqdefault.jpg" alt="Video Thumbnail">
                    <div class="play-icon-overlay">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div class="video-preview-title" data-i18n="video2PreviewTitle">Another Live Demonstration</div>
                </div>
            </div>

            <div class="payment-section">
                <h2 data-i18n="readyToGainEdgeTitle">Ready to Gain Your Edge?</h2>
                <div class="payment-box">
                    <p data-i18n="unlockPowerText">Unlock the power of the Pro Aviator Predictor APK for a single, low investment:</p>
                    <div class="price" data-i18n="price">KES 550</div>
                    <p data-i18n="journeyBeginsText">Your journey to smarter predictions begins with a simple M-Pesa transfer. Here's how to secure your copy:</p>
                    <div class="payment-details">
                        <p data-i18n="step1Payment"><strong>Step 1: Your M-Pesa Payment</strong></p>
                        <p data-i18n="sendAmountTo">Send **KES 550** to the following secure details:</p>
                        <p class="phone-number-display">
                            <span data-i18n="phoneNumberLabel">Phone Number:</span> <strong id="mpesa-number">0720363215</strong> 
                            <button class="copy-btn" onclick="copyMpesaNumber()" data-i18n="copyBtn">Copy</button>
                        </p>
                        <p><span data-i18n="recipientNameLabel">Recipient Name:</span> <strong>Patrick Wanjala</strong></p>
                        <p style="font-size: 0.95rem; margin-top: 1rem; color: #555;" data-i18n="instantAccessText">
                            **Instant Access!** Your payment will be **automatically detected** within moments.
                        </p>
                    </div>

                    <button id="show-manual-form-btn" class="manual-confirm-btn" data-i18n="paymentNotDetectedBtn">
                        Payment not detected? Click here to confirm manually.
                    </button>

                    <div id="manual-payment-form-container" class="hidden">
                        <form id="payment-form">
                            <p data-i18n="step2Confirmation"><strong>Step 2: Manual Payment Confirmation</strong></p>
                            <label for="transaction_id" data-i18n="transactionIdLabel">M-Pesa Transaction ID:</label>
                            <input type="text" id="transaction_id" name="transaction_id" placeholder="e.g., QX123AB45C" required>

                            <label for="whatsapp_number_main" data-i18n="yourWhatsappLabel">Your WhatsApp Number:</label>
                            <input type="text" id="whatsapp_number_main" name="whatsapp_number_main" placeholder="e.g., 07XXXXXXXX" required>

                            <button type="submit" data-i18n="sendDetailsBtn">Send My Details</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="mpesa-instructions-section">
                <h2 data-i18n="mpesaInstructionsTitle">How to Send Money via M-Pesa (Safaricom)</h2>
                <p data-i18n="mpesaStepsIntro">Follow these quick steps on your phone to complete your payment:</p>
                <ol class="mpesa-steps">
                    <li data-i18n="mpesaStep1">Go to your **M-Pesa Menu** on your phone.</li>
                    <li data-i18n="mpesaStep2">Select **"Send Money"**.</li>
                    <li data-i18n="mpesaStep3">Enter the Phone Number: <strong id="mpesa-number-instructions">0720363215</strong></li>
                    <li data-i18n="mpesaStep4">Enter the Amount: **KES 550**</li>
                    <li data-i18n="mpesaStep5">Confirm the Recipient Name is **Patrick Wanjala**.</li>
                    <li data-i18n="mpesaStep6">Enter your M-Pesa PIN and press OK.</li>
                    <li data-i18n="mpesaStep7">You will receive an M-Pesa confirmation SMS. Please keep this SMS for your records.</li>
                </ol>
            </div>

            <div class="features-section">
                <h2 data-i18n="featuresTitle">Key Features and Benefits</h2>
                <ul class="feature-list">
                    <li data-i18n="feature1"><strong>Smart Prediction:</strong> Get algorithm-based predictions to inform your betting decisions.</li>
                    <li data-i18n="feature2"><strong>Statistics and Analysis:</strong> Access statistical information to better understand game situations.</li>
                    <li data-i18n="feature3"><strong>Continuous Updates:</strong> The app updates continuously to reflect in-game parameters.</li>
                    <li data-i18n="feature4"><strong>Friendly Interface:</strong> A clean and easy-to-use design for a seamless user experience.</li>
                </ul>
            </div>

            <div class="how-to-use-section">
                <h2 data-i18n="instructionsTitle">Instructions for Use</h2>
                <ul class="how-to-use-list">
                    <li data-i18n="instruction1"><strong>Download and Installation:</strong> Once payment is confirmed, you will receive an automated message with the APK file and user guide directly to your WhatsApp.</li>
                    <li data-i18n="instruction2"><strong>Use of Features:</strong> Use the predictions and analysis from the app to guide your decisions.</li>
                    <li data-i18n="instruction3"><strong>Performance Tracking:</strong> Track your results and adjust your strategy to find what works best.</li>
                </ul>
            </div>

            <div class="availability-section">
                <h2 data-i18n="compatiblePlatformsTitle">Compatible Betting Platforms</h2>
                <p data-i18n="compatiblePlatformsIntro">The Pro Aviator Predictor APK is designed to work seamlessly with the following popular betting platforms:</p>
                <ul class="platform-list">
                    <li>1xBet</li>
                    <li>Betwinner</li>
                    <li>22Bet</li>
                    <li>Megapari Kenya</li>
                    <li>Paripesa Kenya</li>
                    <li>22Bet Kenya</li>
                    <li>Mozzartbet</li>
                    <li>BC.Game</li>
                    <li>Betika</li>
                    <li>BetLion</li>
                    <li>Bet254</li>
                    <li>Bet365</li>
                    <li>Chezacash</li>
                </ul>
            </div>

            <div class="testimonials-section">
                <h2 data-i18n="testimonialsTitle">What Our Users Say</h2>
                <div class="testimonial-carousel">
                    <div class="testimonial-track" id="testimonialTrack">
                        <!-- Testimonials will be loaded here -->
                    </div>
                    <div class="carousel-nav">
                        <button id="prevTestimonialBtn">&lsaquo;</button>
                        <button id="nextTestimonialBtn">&rsaquo;</button>
                    </div>
                </div>
                <div class="testimonial-form-section">
                    <h4 data-i18n="shareExperienceTitle">Share Your Experience!</h4>
                    <form id="testimonial-form">
                        <textarea id="testimonialInput" placeholder="Write your testimonial here..." required></textarea>
                        <input type="text" id="testimonialAuthor" placeholder="Your Name (Optional)">
                        <button type="submit" data-i18n="submitTestimonialBtn">Submit Testimonial</button>
                    </form>
                </div>
            </div>

            <div class="faq-section">
                <h2 data-i18n="faqTitle">Frequently Asked Questions</h2>
                <div class="faq-search-container">
                    <input type="text" id="faqSearchInput" placeholder="Search FAQs..." data-i18n="faqSearchPlaceholder">
                </div>
                <div id="faqList">
                    <!-- FAQs will be loaded here -->
                </div>
            </div>
        </div>

        <footer>
            <p data-i18n="footerText">&copy; 2025 Pro Aviator Predictor. All Rights Reserved.</p>
        </footer>
    </div>

    <!-- Video Modal Structure -->
    <div class="modal-overlay hidden" id="videoModal">
        <div class="modal-content">
            <button class="modal-close-btn" id="closeVideoModalBtn">
                <svg viewBox="0 0 24 24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
                </svg>
                <span data-i18n="goBackBtn">Go Back</span>
            </button>
            <h3 id="modalVideoTitle" style="text-align: center; margin-bottom: 1rem; color: var(--text-color);"></h3>
            <div class="video-modal-player-container">
                <div id="modal-youtube-player"></div>
            </div>

            <div class="video-info-section">
                <div class="video-views" id="modalVideoViews"></div>
                <div class="video-description" id="modalVideoDescription"></div>
            </div>

            <div class="video-interactions">
                <button class="like-button-thumbnail" id="likeBtn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span class="like-count" id="videoLikeCount">0</span>
                </button>
                <button class="interaction-button" id="subscribeBtn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18h4v-2h-4v2zm-3-3h10v-2H7v2zm-3-3h16V8H4v2zm12-7H8v-.99C8 6.45 8.45 6 9 6h6c.55 0 1 .45 1 1v.01zM18 3H6C4.9 3 4 3.9 4 5v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H6V5h12v14z"/>
                    </svg>
                    <span data-i18n="subscribeBtn">Subscribe</span>
                </button>
                <button class="interaction-button" id="shareBtnVideoModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.52.48 1.2.78 1.96.78 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L7.05 11.23c-.52-.48-1.2-.77-1.96-.77-1.66 0-3 1.34-3 3s1.34 3 3 3c.76 0 1.44-.3 1.96-.77L15.09 15.3c-.05.23-.09.46-.09.7 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    <span data-i18n="shareBtn">Share</span>
                </button>
                <button class="interaction-button" id="downloadAppBtnVideoModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    <span data-i18n="downloadAppBtn">Download App</span>
                </button>
                <button class="interaction-button" id="saveVideoBtnVideoModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14zm-3-5l-2-1.5L10 14V7h4v7z"/>
                    </svg>
                    <span data-i18n="saveVideoBtn">Save Video</span>
                </button>
                <button class="interaction-button" id="reportVideoBtnVideoModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-7z"/>
                    </svg>
                    <span data-i18n="reportBtn">Report</span>
                </button>
            </div>

            <div class="developer-note-section">
                <h5 data-i18n="developerNoteTitle">From the Developer:</h5>
                <p data-i18n="developerNoteText">Hello! We created this app to empower Aviator players with data-driven insights. Our goal is to provide a tool that enhances your gaming strategy, making the experience more engaging and potentially more rewarding. We're constantly working on improvements based on your feedback. Happy predicting!</p>
            </div>

            <div class="comment-section">
                <h4 style="color: var(--text-color);" data-i18n="commentsTitle">Comments</h4>
                <div class="comment-input-group">
                    <input type="text" id="commentInput" placeholder="Add a public comment..." data-i18n="addCommentPlaceholder">
                    <button id="postCommentBtn" data-i18n="postBtn">Post</button>
                </div>
                <div class="comments-list" id="commentsList">
                    <!-- Comments will be added here dynamically by JS -->
                </div>
            </div>
        </div>
    </div>

    <!-- WhatsApp Prompt Modal Structure -->
    <div class="modal-overlay hidden" id="whatsappPromptModal">
        <div class="modal-content">
            <button class="modal-close-btn" id="closeWhatsappModalBtn">
                <svg viewBox="0 0 24 24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
                </svg>
                <span data-i18n="goBackBtn">Go Back</span>
            </button>
            <h4 style="text-align: center; margin-bottom: 1.5rem;" data-i18n="enterWhatsappTitle">Enter Your WhatsApp Number</h4>
            <form id="whatsapp-form">
                <label for="whatsapp_input" class="hidden" data-i18n="whatsappNumberLabel">WhatsApp Number:</label>
                <input type="text" id="whatsapp_input" name="whatsapp_input" placeholder="e.g., 07XXXXXXXX" required>
                <button type="submit" data-i18n="proceedToPaymentBtn">Proceed to Payment</button>
            </form>
        </div>
    </div>

    <!-- Payment Modal Structure (Moved from main content) -->
    <div class="modal-overlay hidden" id="paymentModal">
        <div class="modal-content">
            <button class="modal-close-btn" id="closePaymentModalBtn">
                <svg viewBox="0 0 24 24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
                </svg>
                <span data-i18n="goBackBtn">Go Back</span>
            </button>
            <h2 style="text-align: center; margin-bottom: 1rem; color: var(--primary-color);" data-i18n="readyToGainEdgeTitle">Ready to Gain Your Edge?</h2>
            <div class="payment-box">
                <p data-i18n="unlockPowerText">Unlock the power of the Pro Aviator Predictor APK for a single, low investment:</p>
                <div class="price" data-i18n="price">KES 550</div>
                <p data-i18n="journeyBeginsText">Your journey to smarter predictions begins with a simple M-Pesa transfer. Here's how to secure your copy:</p>
                <div class="payment-details">
                    <p data-i18n="step1Payment"><strong>Step 1: Your M-Pesa Payment</strong></p>
                    <p data-i18n="sendAmountTo">Send **KES 550** to the following secure details:</p>
                    <p class="phone-number-display">
                        <span data-i18n="phoneNumberLabel">Phone Number:</span> <strong id="mpesa-number-modal">0720363215</strong> 
                        <button class="copy-btn" onclick="copyMpesaNumberModal()" data-i18n="copyBtn">Copy</button>
                    </p>
                    <p><span data-i18n="recipientNameLabel">Recipient Name:</span> <strong>Patrick Wanjala</strong></p>
                    <p style="font-size: 0.95rem; margin-top: 1rem; color: #555;" data-i18n="instantAccessText">
                        **Instant Access!** Your payment will be **automatically detected** within moments.
                    </p>
                </div>

                <button id="show-manual-form-btn-modal" class="manual-confirm-btn" data-i18n="paymentNotDetectedBtn">
                    Payment not detected? Click here to confirm manually.
                </button>

                <div id="manual-payment-form-container-modal" class="hidden">
                    <form id="payment-form-modal">
                        <p data-i18n="step2Confirmation"><strong>Step 2: Manual Payment Confirmation</strong></p>
                        <label for="transaction_id_modal" data-i18n="transactionIdLabel">M-Pesa Transaction ID:</label>
                        <input type="text" id="transaction_id_modal" name="transaction_id_modal" placeholder="e.g., QX123AB45C" required>

                        <label for="whatsapp_number_confirm_modal" data-i18n="yourWhatsappLabel">Your WhatsApp Number:</label>
                        <input type="text" id="whatsapp_number_confirm_modal" name="whatsapp_number_confirm_modal" placeholder="e.g., 07XXXXXXXX" required>

                        <button type="submit" data-i18n="sendDetailsBtn">Send My Details</button>
                    </form>
                </div>
            </div>
            
            <div class="mpesa-instructions-section">
                <h2 data-i18n="mpesaInstructionsTitle">How to Send Money via M-Pesa (Safaricom)</h2>
                <p data-i18n="mpesaStepsIntro">Follow these quick steps on your phone to complete your payment:</p>
                <ol class="mpesa-steps">
                    <li data-i18n="mpesaStep1">Go to your **M-Pesa Menu** on your phone.</li>
                    <li data-i18n="mpesaStep2">Select **"Send Money"**.</li>
                    <li data-i18n="mpesaStep3">Enter the Phone Number: <strong id="mpesa-number-instructions-modal">0720363215</strong></li>
                    <li data-i18n="mpesaStep4">Enter the Amount: **KES 550**</li>
                    <li data-i18n="mpesaStep5">Confirm the Recipient Name is **Patrick Wanjala**.</li>
                    <li data-i18n="mpesaStep6">Enter your M-Pesa PIN and press OK.</li>
                    <li data-i18n="mpesaStep7">You will receive an M-Pesa confirmation SMS. Please keep this SMS for your records.</li>
                </ol>
            </div>
        </div>
    </div>

    <!-- Custom Message Box Overlay -->
    <div class="message-box-overlay" id="messageBoxOverlay">
        <div class="message-box-content">
            <p id="messageBoxText"></p>
            <button id="messageBoxCloseBtn" data-i18n="okBtn">OK</button>
        </div>
    </div>

    <!-- Report Modal Structure -->
    <div class="modal-overlay hidden" id="reportModal">
        <div class="modal-content">
            <button class="modal-close-btn" id="closeReportModalBtn">
                <svg viewBox="0 0 24 24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
                </svg>
                <span data-i18n="goBackBtn">Go Back</span>
            </button>
            <h4 style="text-align: center; margin-bottom: 1.5rem;" data-i18n="reportVideoTitle">Report Video</h4>
            <p data-i18n="reportVideoIntro">This video has never received negative reactions or feedback.</p>
            <p data-i18n="reportVideoConfirm">Do you still want to report it?</p>
            <textarea id="reportReasonInput" placeholder="Optionally, enter your reason for reporting..." data-i18n="reportReasonPlaceholder"></textarea>
            <div class="report-actions">
                <button id="confirmReportBtn" data-i18n="yesReportBtn">Yes, Report</button>
                <button id="cancelReportBtn" data-i18n="cancelBtn">Cancel</button>
            </div>
        </div>
    </div>

    <!-- Advertisement Modal Structure -->
    <div class="advertisement-modal-overlay" id="advertisementModal">
        <div class="advertisement-modal-content">
            <button class="advertisement-close-btn" id="closeAdvertisementModalBtn">&times;</button>
            <p id="advertisementText"></p>
            <button class="advertisement-buy-now-btn" id="advertisementBuyNowBtn" data-i18n="buyNowBtn">Buy Now!</button>
        </div>
    </div>

    <!-- Exit Intent Modal Structure -->
    <div class="exit-intent-modal-overlay hidden" id="exitIntentModal">
        <div class="exit-intent-modal-content">
            <h4 data-i18n="exitIntentTitle">Don't Leave Yet!</h4>
            <p data-i18n="exitIntentText1">Are you sure you want to miss out on maximizing your Aviator wins?</p>
            <p data-i18n="exitIntentText2">Get the **Pro Aviator Predictor APK** now and start winning smarter!</p>
            <div class="price" data-i18n="exitIntentPrice">KES 550/= Only!</div>
            <div class="exit-intent-modal-actions">
                <button class="stay-btn" id="stayOnPageBtn" data-i18n="stayOnPageBtn">Stay on Page & Buy Now!</button>
                <button class="leave-btn" id="leaveAnywayBtn" data-i18n="leaveAnywayBtn">No, I want to leave</button>
            </div>
        </div>
    </div>

    <!-- Scroll to Top Button -->
    <button onclick="scrollToTop()" id="scrollToTopBtn" title="Go to top">↑</button>


    <script>
        let player; // Global YouTube player object for the modal
        let currentVideoId = '';
        let currentStartTime = 0;
        let youtubeApiReady = false; // Flag to track YouTube API readiness

        let videoLikes = {
            '9smQbuPXsf8': 1400, // Initial likes for video 1
            'hF4hqebVrx4': 850   // Initial likes for video 2
        };

        // Translations object
        const translations = {
            en: {
                pageTitle: "Pro Aviator Predictor APK - Get Started",
                mainTitle: "Pro Aviator Predictor",
                subtitle: "Latest version MQ2#XCVK",
                headerIntro: "Introducing the **New, Upgraded Version** of the Aviator Predictor App! We've enhanced stability and performance after the previous version experienced massive traffic. Get ready for an even smoother experience.",
                urgencyText: "⚡️ **LIMITED-TIME OPPORTUNITY!** Get your Pro Aviator Predictor APK now. Don't miss out on this enhanced version!",
                aboutTitle: "About the Pro Aviator Predictor APK",
                aboutPara1: "Aviator Predictor APK is a powerful utility application designed to give you a strategic advantage in the popular and challenging Aviator game. Developed on a solid mathematical model, this app provides data-driven predictions and analysis to help you make smarter, more informed decisions, moving beyond pure luck.",
                aboutPara2: "The app focuses on providing intelligent predictions based on data and algorithms, not a 'magic key' to victory. It's a tool to complement your skill and understanding of the game, helping you optimize your chances of winning.",
                whyChooseUsTitle: "Why Choose Our Predictor?",
                whyChoose1Title: "Precision Algorithms",
                whyChoose1Desc: "Our app uses advanced algorithms to analyze game patterns and provide highly accurate predictions.",
                whyChoose2Title: "User-Friendly Interface",
                whyChoose2Desc: "Designed for ease of use, ensuring a seamless experience for both new and experienced players.",
                whyChoose3Title: "Constant Updates",
                whyChoose3Desc: "We regularly update our app to adapt to game changes and improve prediction accuracy.",
                videoTitle: "Watch Our Videos",
                videoInstruction: "Click on any video below to watch it in a full-screen, interactive player.",
                video1PreviewTitle: "Live Performance Streaming",
                video2PreviewTitle: "Another Live Demonstration",
                videoNote: "*Please note: The video may appear blurred in some areas for privacy and security purposes.*",
                readyToGainEdgeTitle: "Ready to Gain Your Edge?",
                unlockPowerText: "Unlock the power of the Pro Aviator Predictor APK for a single, low investment:",
                price: "KES 550",
                journeyBeginsText: "Your journey to smarter predictions begins with a simple M-Pesa transfer. Here's how to secure your copy:",
                step1Payment: "Step 1: Your M-Pesa Payment",
                sendAmountTo: "Send **KES 550** to the following secure details:",
                phoneNumberLabel: "Phone Number:",
                copyBtn: "Copy",
                recipientNameLabel: "Recipient Name:",
                instantAccessText: "**Instant Access!** Your payment will be **automatically detected** within moments.",
                paymentNotDetectedBtn: "Payment not detected? Click here to confirm manually.",
                step2Confirmation: "Step 2: Manual Payment Confirmation",
                transactionIdLabel: "M-Pesa Transaction ID:",
                yourWhatsappLabel: "Your WhatsApp Number:",
                sendDetailsBtn: "Send My Details",
                mpesaInstructionsTitle: "How to Send Money via M-Pesa (Safaricom)",
                mpesaStepsIntro: "Follow these quick steps on your phone to complete your payment:",
                mpesaStep1: "Go to your **M-Pesa Menu** on your phone.",
                mpesaStep2: "Select **\"Send Money\"**.",
                mpesaStep3: "Enter the Phone Number: <strong id=\"mpesa-number-instructions\">0720363215</strong>",
                mpesaStep4: "Enter the Amount: **KES 550**",
                mpesaStep5: "Confirm the Recipient Name is **Patrick Wanjala**.",
                mpesaStep6: "Enter your M-Pesa PIN and press OK.",
                mpesaStep7: "You will receive an M-Pesa confirmation SMS. Please keep this SMS for your records.",
                featuresTitle: "Key Features and Benefits",
                feature1: "<strong>Smart Prediction:</strong> Get algorithm-based predictions to inform your betting decisions.",
                feature2: "<strong>Statistics and Analysis:</strong> Access statistical information to better understand game situations.",
                feature3: "<strong>Continuous Updates:</strong> The app updates continuously to reflect in-game parameters.",
                feature4: "<strong>Friendly Interface:</strong> A clean and easy-to-use design for a seamless user experience.",
                instructionsTitle: "Instructions for Use",
                instruction1: "<strong>Download and Installation:</strong> Once payment is confirmed, you will receive an automated message with the APK file and user guide directly to your WhatsApp.",
                instruction2: "<strong>Use of Features:</strong> Use the predictions and analysis from the app to guide your decisions.",
                instruction3: "<strong>Performance Tracking:</strong> Track your results and adjust your strategy to find what works best.",
                compatiblePlatformsTitle: "Compatible Betting Platforms",
                compatiblePlatformsIntro: "The Pro Aviator Predictor APK is designed to work seamlessly with the following popular betting platforms:",
                testimonialsTitle: "What Our Users Say",
                shareExperienceTitle: "Share Your Experience!",
                submitTestimonialBtn: "Submit Testimonial",
                faqTitle: "Frequently Asked Questions",
                faqSearchPlaceholder: "Search FAQs...",
                footerText: "&copy; 2025 Pro Aviator Predictor. All Rights Reserved.",
                goBackBtn: "Go Back",
                subscribeBtn: "Subscribe",
                shareBtn: "Share",
                downloadAppBtn: "Download App",
                saveVideoBtn: "Save Video",
                reportBtn: "Report",
                developerNoteTitle: "From the Developer:",
                developerNoteText: "Hello! We created this app to empower Aviator players with data-driven insights. Our goal is to provide a tool that enhances your gaming strategy, making the experience more engaging and potentially more rewarding. We're constantly working on improvements based on your feedback. Happy predicting!",
                commentsTitle: "Comments",
                addCommentPlaceholder: "Add a public comment...",
                postBtn: "Post",
                enterWhatsappTitle: "Enter Your WhatsApp Number",
                proceedToPaymentBtn: "Proceed to Payment",
                okBtn: "OK",
                reportVideoTitle: "Report Video",
                reportVideoIntro: "This video has never received negative reactions or feedback.",
                reportVideoConfirm: "Do you still want to report it?",
                reportReasonPlaceholder: "Optionally, enter your reason for reporting...",
                yesReportBtn: "Yes, Report",
                cancelBtn: "Cancel",
                buyNowBtn: "Buy Now!",
                exitIntentTitle: "Don't Leave Yet!",
                exitIntentText1: "Are you sure you want to miss out on maximizing your Aviator wins?",
                exitIntentText2: "Get the **Pro Aviator Predictor APK** now and start winning smarter!",
                exitIntentPrice: "KES 550/= Only!",
                stayOnPageBtn: "Stay on Page & Buy Now!",
                leaveAnywayBtn: "No, I want to leave",
                messageCopied: "M-Pesa number copied to clipboard: ",
                paymentReceived: "Thank you! Your payment details have been received.\n\nTransaction ID: {transactionId}\nWhatsApp Number: {whatsappNumber}\n\nWe will contact you shortly to send the APK file.",
                commentEmpty: "Please enter a comment before posting.",
                unsupportedFeature: "Unsupported by the browser. This feature is not available.",
                reportReceived: "Your report is received and it is awaiting feedback. {reason}",
                replyEmpty: "Please enter your reply.",
                whatsappNumberRequired: "Please enter your WhatsApp number to proceed.",
                testimonialSubmitted: "Thank you for your testimonial! It has been submitted for review.",
                testimonialEmpty: "Please enter your testimonial.",
                testimonialAuthorDefault: "Anonymous User"
            },
            sw: {
                pageTitle: "Pro Aviator Predictor APK - Anza Sasa",
                mainTitle: "Pro Aviator Predictor",
                subtitle: "Toleo Jipya Zaidi MQ2#XCVK",
                headerIntro: "Tunakuletea **Toleo Jipya Lililoboreshwa** la Programu ya Aviator Predictor! Tumeongeza utulivu na utendaji baada ya toleo lililopita kukumbana na trafiki kubwa. Jitayarishe kwa uzoefu laini zaidi.",
                urgencyText: "⚡️ **FURSA YA MUDA MFUPI!** Pata Pro Aviator Predictor APK yako sasa na ongeza ushindi wako!",
                aboutTitle: "Kuhusu Pro Aviator Predictor APK",
                aboutPara1: "Aviator Predictor APK ni programu yenye nguvu iliyoundwa kukupa faida ya kimkakati katika mchezo maarufu na mgumu wa Aviator. Imeundwa kwa mfumo thabiti wa hisabati, programu hii inatoa utabiri na uchambuzi unaotokana na data kukusaidia kufanya maamuzi sahihi zaidi, zaidi ya bahati tu.",
                aboutPara2: "Programu inalenga kutoa utabiri wa akili kulingana na data na algorithms, sio \"ufunguo wa uchawi\" wa ushindi. Ni zana ya kukamilisha ujuzi wako na uelewa wa mchezo, kukusaidia kuboresha nafasi zako za kushinda.",
                whyChooseUsTitle: "Kwa Nini Uchague Predictor Yetu?",
                whyChoose1Title: "Algoriti Sahihi",
                whyChoose1Desc: "Programu yetu inatumia algoriti za hali ya juu kuchambua mifumo ya mchezo na kutoa utabiri sahihi sana.",
                whyChoose2Title: "Kiolesura Rahisi Kutumia",
                whyChoose2Desc: "Imeundwa kwa urahisi wa matumizi, kuhakikisha uzoefu usio na mshono kwa wachezaji wapya na wenye uzoefu.",
                whyChoose3Title: "Sasisho za Mara kwa Mara",
                whyChoose3Desc: "Tunasasisha programu yetu mara kwa mara ili kukabiliana na mabadiliko ya mchezo na kuboresha usahihi wa utabiri.",
                videoTitle: "Tazama Video Zetu",
                videoInstruction: "Bofya video yoyote hapa chini ili kuitazama katika kichezaji kikubwa, kinachoweza kutumika.",
                video1PreviewTitle: "Utiririshaji wa Moja kwa Moja",
                video2PreviewTitle: "Onyesho Lingine la Moja kwa Moja",
                videoNote: "*Tafadhali kumbuka: Video inaweza kuonekana ikiwa imefifia katika baadhi ya maeneo kwa madhumuni ya faragha na usalama.*",
                readyToGainEdgeTitle: "Uko Tayari Kupata Faida Yako?",
                unlockPowerText: "Fungua uwezo wa Pro Aviator Predictor APK kwa uwekezaji mmoja mdogo:",
                price: "KES 550",
                journeyBeginsText: "Safari yako ya utabiri mahiri inaanza na uhamishaji rahisi wa M-Pesa. Hivi ndivyo jinsi ya kupata nakala yako:",
                step1Payment: "Hatua ya 1: Malipo Yako ya M-Pesa",
                sendAmountTo: "Tuma **KES 550** kwa maelezo salama yafuatayo:",
                phoneNumberLabel: "Nambari ya Simu:",
                copyBtn: "Nakili",
                recipientNameLabel: "Jina la Mpokeaji:",
                instantAccessText: "**Ufikiaji wa Papo Hapo!** Malipo yako **yatatambuliwa kiotomatiki** ndani ya muda mfupi.",
                paymentNotDetectedBtn: "Malipa hayajatambuliwa? Bofya hapa kuthibitisha mwenyewe.",
                step2Confirmation: "Hatua ya 2: Uthibitisho wa Malipo ya Mwongozo",
                transactionIdLabel: "Kitambulisho cha Muamala wa M-Pesa:",
                yourWhatsappLabel: "Nambari Yako ya WhatsApp:",
                sendDetailsBtn: "Tuma Maelezo Yangu",
                mpesaInstructionsTitle: "Jinsi ya Kutuma Pesa kupitia M-Pesa (Safaricom)",
                mpesaStepsIntro: "Fuata hatua hizi za haraka kwenye simu yako ili kukamilisha malipo yako:",
                mpesaStep1: "Nenda kwenye **Menyu yako ya M-Pesa** kwenye simu yako.",
                mpesaStep2: "Chagua **\"Tuma Pesa\"**.",
                mpesaStep3: "Weka Nambari ya Simu: <strong id=\"mpesa-number-instructions\">0720363215</strong>",
                mpesaStep4: "Weka Kiasi: **KES 550**",
                mpesaStep5: "Thibitisha Jina la Mpokeaji ni **Patrick Wanjala**.",
                mpesaStep6: "Weka PIN yako ya M-Pesa na ubonyeze Sawa.",
                mpesaStep7: "Utapokea SMS ya uthibitisho wa M-Pesa. Tafadhali hifadhi SMS hii kwa kumbukumbu zako.",
                featuresTitle: "Vipengele Muhimu na Faida",
                feature1: "<strong>Utabiri Mahiri:</strong> Pata utabiri unaotokana na algoriti ili kuarifu maamuzi yako ya kubashiri.",
                feature2: "<strong>Takwimu na Uchambuzi:</strong> Fikia habari za takwimu ili kuelewa vizuri hali za mchezo.",
                feature3: "<strong>Sasisho za Kuendelea:</strong> Programu inasasishwa mfululizo ili kuakisi vigezo vya ndani ya mchezo.",
                feature4: "<strong>Kiolesura Rafiki:</strong> Muundo safi na rahisi kutumia kwa uzoefu usio na mshono wa mtumiaji.",
                instructionsTitle: "Maelekezo ya Matumizi",
                instruction1: "<strong>Pakua na Usakinishe:</strong> Mara tu malipo yanapothibitishwa, utapokea ujumbe wa kiotomatiki na faili ya APK na mwongozo wa mtumiaji moja kwa moja kwenye WhatsApp yako.",
                instruction2: "<strong>Matumizi ya Vipengele:</strong> Tumia utabiri na uchambuzi kutoka kwa programu kuongoza maamuzi yako.",
                instruction3: "<strong>Ufuatiliaji wa Utendaji:</strong> Fuatilia matokeo yako na urekebishe mkakati wako ili kupata kinachofaa zaidi.",
                compatiblePlatformsTitle: "Majukwaa Yanayooana ya Kubashiri",
                compatiblePlatformsIntro: "Pro Aviator Predictor APK imeundwa kufanya kazi vizuri na majukwaa yafuatayo maarufu ya kubashiri:",
                testimonialsTitle: "Watetezi Wetu Wanasema Nini",
                shareExperienceTitle: "Shiriki Uzoefu Wako!",
                submitTestimonialBtn: "Wasilisha Ushuhuda",
                faqTitle: "Maswali Yanayoulizwa Mara kwa Mara",
                faqSearchPlaceholder: "Tafuta Maswali Yanayoulizwa Mara kwa Mara...",
                footerText: "&copy; 2025 Pro Aviator Predictor. Haki Zote Zimehifadhiwa.",
                goBackBtn: "Rudi Nyuma",
                subscribeBtn: "Jisajili",
                shareBtn: "Shiriki",
                downloadAppBtn: "Pakua Programu",
                saveVideoBtn: "Hifadhi Video",
                reportBtn: "Ripoti",
                developerNoteTitle: "Kutoka kwa Msanidi Programu:",
                developerNoteText: "Habari! Tuliunda programu hii kuwawezesha wachezaji wa Aviator na maarifa yanayotokana na data. Lengo letu ni kutoa zana inayoboresha mkakati wako wa michezo ya kubahatisha, na kufanya uzoefu uwe wa kuvutia zaidi na uwezekano wa kutoa faida zaidi. Tunafanya kazi kila mara kuboresha kulingana na maoni yako. Furaha ya kutabiri!",
                commentsTitle: "Maoni",
                addCommentPlaceholder: "Ongeza maoni ya umma...",
                postBtn: "Tuma",
                enterWhatsappTitle: "Weka Nambari Yako ya WhatsApp",
                proceedToPaymentBtn: "Endelea na Malipo",
                okBtn: "Sawa",
                reportVideoTitle: "Ripoti Video",
                reportVideoConfirm: "Do you still want to report it?",
                reportReasonPlaceholder: "Hiari, weka sababu yako ya kuripoti...",
                yesReportBtn: "Ndio, Ripoti",
                cancelBtn: "Ghairi",
                buyNowBtn: "Nunua Sasa!",
                exitIntentTitle: "Usiondoke Bado!",
                exitIntentText1: "Una uhakika unataka kukosa kuongeza ushindi wako wa Aviator?",
                exitIntentText2: "Pata **Pro Aviator Predictor APK** sasa na anza kushinda kwa akili!",
                exitIntentPrice: "KES 550/= Pekee!",
                stayOnPageBtn: "Kaa kwenye Ukurasa na Nunua Sasa!",
                leaveAnywayBtn: "Hapana, nataka kuondoka",
                messageCopied: "Nambari ya M-Pesa imenakiliwa: ",
                paymentReceived: "Asante! Maelezo yako ya malipo yamepokelewa.\n\nKitambulisho cha Muamala: {transactionId}\nNambari ya WhatsApp: {whatsappNumber}\n\nTutawasiliana nawe hivi karibuni kukutumia faili ya APK.",
                commentEmpty: "Tafadhali weka maoni kabla ya kutuma.",
                unsupportedFeature: "Haiungwi mkono na kivinjari. Kipengele hiki hakipatikani.",
                reportReceived: "Ripoti yako imepokelewa na inasubiri maoni. {reason}",
                replyEmpty: "Tafadhali weka jibu lako.",
                whatsappNumberRequired: "Tafadhali weka nambari yako ya WhatsApp ili kuendelea.",
                testimonialSubmitted: "Asante kwa ushuhuda wako! Imewasilishwa kwa ukaguzi.",
                testimonialEmpty: "Tafadhali weka ushuhuda wako.",
                testimonialAuthorDefault: "Mtumiaji Asiyejulikana"
            }
        };

        let currentLanguage = 'en'; // Default language

        // Function to apply translations
        function applyTranslations() {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[currentLanguage] && translations[currentLanguage][key]) {
                    // Handle innerHTML for bold text in translations
                    element.innerHTML = translations[currentLanguage][key].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                }
            });
            // Update specific attributes like placeholders
            document.title = translations[currentLanguage].pageTitle; // Fixed: Use document.title for the page title
            document.getElementById('faqSearchInput').placeholder = translations[currentLanguage].faqSearchPlaceholder;
            document.getElementById('reportReasonInput').placeholder = translations[currentLanguage].reportReasonPlaceholder;
            document.getElementById('commentInput').placeholder = translations[currentLanguage].addCommentPlaceholder;
            
            // Update video titles based on language
            document.querySelectorAll('.video-preview').forEach(preview => {
                const videoTitleElement = preview.querySelector('.video-preview-title');
                const enTitle = preview.getAttribute('data-video-title-en');
                const swTitle = preview.getAttribute('data-video-title-sw');
                if (currentLanguage === 'en') {
                    videoTitleElement.innerText = enTitle;
                } else if (currentLanguage === 'sw') {
                    videoTitleElement.innerText = swTitle;
                }
            });

            // Update modal video title if open
            if (document.getElementById('videoModal').classList.contains('active')) {
                const videoId = currentVideoId; // Use the currently playing video's ID
                const enTitle = document.querySelector(`.video-preview[data-video-id="${videoId}"]`).getAttribute('data-video-title-en');
                const swTitle = document.querySelector(`.video-preview[data-video-id="${videoId}"]`).getAttribute('data-video-title-sw');
                if (currentLanguage === 'en') {
                    document.getElementById('modalVideoTitle').innerText = enTitle;
                } else if (currentLanguage === 'sw') {
                    document.getElementById('modalVideoTitle').innerText = swTitle;
                }
            }
        }

        // Language switcher event listener
        document.getElementById('language-select').addEventListener('change', (event) => {
            currentLanguage = event.target.value;
            applyTranslations();
            renderFAQs(faqData); // Re-render FAQs for current language
            renderTestimonials(); // Re-render testimonials for current language
        });

        // Helper function to format large numbers (e.g., 1400 -> 1.4K)
        function formatNumber(num) {
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + 'M';
            }
            if (num >= 1000) {
                return (num / 1000).toFixed(1) + 'K';
            }
            return num;
        }

        // --- Custom Message Box Functions ---
        function showMessageBox(message) {
            const messageBoxOverlay = document.getElementById('messageBoxOverlay');
            const messageBoxText = document.getElementById('messageBoxText');
            messageBoxText.innerText = message;
            messageBoxOverlay.classList.add('active');
            stopAdTimer(); // Pause ads when message box is open
        }

        function closeMessageBox() {
            const messageBoxOverlay = document.getElementById('messageBoxOverlay');
            messageBoxOverlay.classList.remove('active');
            checkAndResumeAdTimer(); // Resume ads if no other modals are open
        }

        // Attach event listener to the message box close button
        document.getElementById('messageBoxCloseBtn').addEventListener('click', closeMessageBox);

        // Load the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // This function creates an <iframe> (and YouTube player)
        // after the API code downloads.
        function onYouTubeIframeAPIReady() {
            youtubeApiReady = true; // Set the flag to true when API is ready
            // Any other initializations that need YT can go here
        }

        // Function to open the video modal
        function openVideoModal(videoId, startTime, videoTitle) {
            currentVideoId = videoId;
            currentStartTime = startTime;

            document.getElementById('modalVideoTitle').innerText = videoTitle;
            document.getElementById('videoModal').classList.add('active');
            stopAdTimer(); // Pause ads when video modal is open
            hideExitIntentModal(); // Hide exit intent if it's open

            // Set initial like count for the video
            document.getElementById('videoLikeCount').innerText = formatNumber(videoLikes[videoId] || 0);

            // Populate video description and views
            const details = videoDetails[videoId];
            if (details) {
                document.getElementById('modalVideoViews').innerText = `${formatNumber(details.views)} views`;
                document.getElementById('modalVideoDescription').innerText = details.description[currentLanguage];
                // Now load comments specific to this video
                renderComments(details.comments);
            }

            // ONLY proceed if YouTube API is ready
            if (youtubeApiReady) {
                // Destroy existing player if it exists to ensure a fresh, ready player
                if (player && typeof player.destroy === 'function') {
                    player.destroy();
                    player = null; // Clear the player reference
                }

                // Create a new player instance. The video will be loaded in onPlayerReadyModal.
                player = new YT.Player('modal-youtube-player', {
                    videoId: currentVideoId, // Set initial video ID for the new player
                    playerVars: {
                        'autoplay': 1,
                        'controls': 0,
                        'showinfo': 0,
                        'modestbranding': 1,
                        'rel': 0,
                        'loop': 1,
                        'playlist': currentVideoId, // Required for loop to work
                        'start': currentStartTime,
                        'enablejsapi': 1
                    },
                    events: {
                        'onReady': onPlayerReadyModal,
                        'onStateChange': onPlayerStateChangeModal
                    }
                });
            } else {
                console.warn('YouTube IFrame API not yet ready. Video might not load immediately.');
                // Optionally, display a message to the user that the video is loading
                // or a fallback image/message.
            }

            // --- Attach event listeners for buttons inside the video modal ---
            const likeBtn = document.getElementById('likeBtn');
            const subscribeBtn = document.getElementById('subscribeBtn');
            const shareBtnVideoModal = document.getElementById('shareBtnVideoModal');
            const downloadAppBtnVideoModal = document.getElementById('downloadAppBtnVideoModal');
            const saveVideoBtnVideoModal = document.getElementById('saveVideoBtnVideoModal');
            const reportVideoBtnVideoModal = document.getElementById('reportVideoBtnVideoModal');
            const commentInput = document.getElementById('commentInput');
            const postCommentBtn = document.getElementById('postCommentBtn');
            const commentsList = document.getElementById('commentsList');


            if (likeBtn) {
                likeBtn.onclick = function() {
                    this.classList.toggle('liked');
                    let currentLikes = videoLikes[currentVideoId] || 0;
                    if (this.classList.contains('liked')) {
                        currentLikes++;
                    } else {
                        currentLikes--;
                    }
                    videoLikes[currentVideoId] = currentLikes;
                    document.getElementById('videoLikeCount').innerText = formatNumber(currentLikes);
                };
            }

            if (subscribeBtn) {
                subscribeBtn.onclick = function() {
                    if (this.classList.contains('subscribed')) {
                        this.classList.remove('subscribed');
                        this.querySelector('span').innerText = translations[currentLanguage].subscribeBtn;
                    } else {
                        this.classList.add('subscribed');
                        this.querySelector('span').innerText = translations[currentLanguage].subscribeBtn; // Stays "Subscribe" or "Jisajili"
                    }
                };
            }

            if (shareBtnVideoModal) {
                shareBtnVideoModal.onclick = function() {
                    const videoUrl = `https://youtu.be/${currentVideoId}`;
                    const tempInput = document.createElement('textarea');
                    tempInput.value = videoUrl;
                    document.body.appendChild(tempInput);
                    tempInput.select();
                    document.execCommand('copy');
                    document.body.removeChild(tempInput);
                    showMessageBox(translations[currentLanguage].messageCopied + videoUrl);
                };
            }

            if (downloadAppBtnVideoModal) {
                downloadAppBtnVideoModal.onclick = function() {
                    closeVideoModal(); // Close video modal first
                    document.getElementById('whatsappPromptModal').classList.add('active');
                };
            }

            if (saveVideoBtnVideoModal) {
                saveVideoBtnVideoModal.onclick = function() {
                    showMessageBox(translations[currentLanguage].unsupportedFeature);
                };
            }

            if (reportVideoBtnVideoModal) {
                reportVideoBtnVideoModal.onclick = function() {
                    document.getElementById('reportModal').classList.add('active');
                    document.getElementById('reportReasonInput').value = ''; // Clear previous input
                    stopAdTimer(); // Pause ads when report modal is open
                };
            }
            // --- End of video modal button attachments ---

            // --- Attach event listeners for comment section elements inside the video modal ---
            if (postCommentBtn) {
                postCommentBtn.onclick = function() {
                    const commentText = commentInput.value.trim();
                    if (commentText) {
                        const newComment = {
                            author: `User_${Math.floor(Math.random() * 10000)}`, // Random user for new comment
                            text: commentText,
                            likes: 0,
                            replies: []
                        };
                        videoDetails[currentVideoId].comments.unshift(newComment); // Add new comments to the current video's array
                        renderComments(videoDetails[currentVideoId].comments); // Re-render with current video's comments
                        commentInput.value = ''; // Clear input
                        commentsList.scrollTop = 0; // Scroll to top to show new comment
                    } else {
                        showMessageBox(translations[currentLanguage].commentEmpty);
                    }
                };
            }
            // --- End of comment section button attachments ---
        }

        // The API will call this function when the modal video player is ready.
        function onPlayerReadyModal(event) {
            // The videoId and startTime are already set in the playerVars during creation.
            // Just ensure it plays and unmutes.
            event.target.playVideo();
            event.target.unMute();
        }

        // The API calls this function when the player's state changes.
        function onPlayerStateChangeModal(event) {
            // If the video starts playing, ensure it's the only one
            if (event.data == YT.PlayerState.PLAYING) {
                // In this setup, only one video player (the modal one) exists at a time,
                // so no need to pause others on the main page.
            }
        }

        // Function to close the video modal
        function closeVideoModal() {
            document.getElementById('videoModal').classList.remove('active');
            if (player && typeof player.stopVideo === 'function') {
                player.stopVideo(); // Stop video when modal closes
                // Destroy the player to free up resources when the modal is closed
                if (typeof player.destroy === 'function') {
                    player.destroy();
                    player = null; // Clear the player reference
                }
            }
            document.getElementById('commentsList').innerHTML = '';
            document.getElementById('commentInput').value = '';
            checkAndResumeAdTimer(); // Resume ads if no other modals are open
        }

        // Attach click listeners to video previews
        document.querySelectorAll('.video-preview').forEach(preview => {
            preview.addEventListener('click', function() {
                const videoId = this.dataset.videoId;
                const startTime = parseInt(this.dataset.startTime || '0');
                const videoTitle = (currentLanguage === 'en' ? this.dataset.videoTitleEn : this.dataset.videoTitleSw);
                openVideoModal(videoId, startTime, videoTitle);
            });
        });

        // Attach click listener to close video modal button
        document.getElementById('closeVideoModalBtn').addEventListener('click', closeVideoModal);

        // --- M-Pesa Form Logic (Main Page) ---
        function copyMpesaNumber() {
            const mpesaNumber = document.getElementById('mpesa-number').innerText;
            const tempInput = document.createElement('textarea');
            tempInput.value = mpesaNumber;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            showMessageBox(translations[currentLanguage].messageCopied + mpesaNumber);
        }

        document.getElementById('payment-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const transactionId = document.getElementById('transaction_id').value;
            const whatsappNumber = document.getElementById('whatsapp_number_main').value;

            // Basic validation
            if (!/^[A-Z0-9]{10}$/.test(transactionId)) {
                showMessageBox("Please enter a valid 10-character M-Pesa Transaction ID (e.g., QX123AB45C).");
                return;
            }
            if (!/^07\d{8}$/.test(whatsappNumber)) {
                showMessageBox("Please enter a valid 10-digit Kenyan WhatsApp number starting with 07.");
                return;
            }

            showMessageBox(
                translations[currentLanguage].paymentReceived
                    .replace('{transactionId}', transactionId)
                    .replace('{whatsappNumber}', whatsappNumber)
            );
            this.reset();
            document.getElementById('manual-payment-form-container').classList.add('hidden');
            document.getElementById('show-manual-form-btn').style.display = 'block';
        });

        document.getElementById('show-manual-form-btn').addEventListener('click', function() {
            document.getElementById('manual-payment-form-container').classList.remove('hidden');
            this.style.display = 'none';
        });

        // --- WhatsApp Prompt Modal Logic ---
        const whatsappPromptModal = document.getElementById('whatsappPromptModal');
        const closeWhatsappModalBtn = document.getElementById('closeWhatsappModalBtn');
        const whatsappForm = document.getElementById('whatsapp-form');
        const whatsappInput = document.getElementById('whatsapp_input');

        closeWhatsappModalBtn.addEventListener('click', () => {
            whatsappPromptModal.classList.remove('active');
            whatsappInput.value = ''; // Clear input on close
            checkAndResumeAdTimer(); // Resume ads if no other modals are open
        });

        whatsappForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const whatsappNumber = whatsappInput.value.trim();
            if (whatsappNumber) {
                // Basic validation for WhatsApp number
                if (!/^07\d{8}$/.test(whatsappNumber)) {
                    showMessageBox("Please enter a valid 10-digit Kenyan WhatsApp number starting with 07.");
                    return;
                }

                whatsappPromptModal.classList.remove('active'); // Close WhatsApp modal
                document.getElementById('paymentModal').classList.add('active'); // Open payment modal
                stopAdTimer(); // Pause ads when payment modal is open
                // Display the confirmation prompt
                showMessageBox(translations[currentLanguage].instruction1);
                whatsappInput.value = ''; // Clear input
            } else {
                showMessageBox(translations[currentLanguage].whatsappNumberRequired);
            }
        });

        // --- Payment Modal Logic ---
        const paymentModal = document.getElementById('paymentModal');
        const closePaymentModalBtn = document.getElementById('closePaymentModalBtn');
        const mpesaNumberModal = document.getElementById('mpesa-number-modal');
        const mpesaInstructionsModal = document.getElementById('mpesa-number-instructions-modal');
        const showManualFormBtnModal = document.getElementById('show-manual-form-btn-modal');
        const manualPaymentFormContainerModal = document.getElementById('manual-payment-form-container-modal');
        const paymentFormModal = document.getElementById('payment-form-modal');

        closePaymentModalBtn.addEventListener('click', () => {
            paymentModal.classList.remove('active');
            manualPaymentFormContainerModal.classList.add('hidden'); // Hide form on close
            showManualFormBtnModal.style.display = 'block'; // Show button on close
            checkAndResumeAdTimer(); // Resume ads if no other modals are open
        });

        function copyMpesaNumberModal() {
            const mpesaNumber = mpesaNumberModal.innerText;
            const tempInput = document.createElement('textarea');
            tempInput.value = mpesaNumber;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            showMessageBox(translations[currentLanguage].messageCopied + mpesaNumber);
        }

        showManualFormBtnModal.addEventListener('click', function() {
            manualPaymentFormContainerModal.classList.remove('hidden');
            this.style.display = 'none';
        });

        paymentFormModal.addEventListener('submit', function(event) {
            event.preventDefault();

            const transactionId = document.getElementById('transaction_id_modal').value;
            const whatsappNumber = document.getElementById('whatsapp_number_confirm_modal').value;

            // Basic validation
            if (!/^[A-Z0-9]{10}$/.test(transactionId)) {
                showMessageBox("Please enter a valid 10-character M-Pesa Transaction ID (e.g., QX123AB45C).");
                return;
            }
            if (!/^07\d{8}$/.test(whatsappNumber)) {
                showMessageBox("Please enter a valid 10-digit Kenyan WhatsApp number starting with 07.");
                return;
            }

            showMessageBox(
                translations[currentLanguage].paymentReceived
                    .replace('{transactionId}', transactionId)
                    .replace('{whatsappNumber}', whatsappNumber)
            );
            this.reset();
            manualPaymentFormContainerModal.classList.add('hidden');
            showManualFormBtnModal.style.display = 'block';
            paymentModal.classList.remove('active'); // Close payment modal after submission
        });

        // --- Report Modal Logic ---
        const reportModal = document.getElementById('reportModal');
        const closeReportModalBtn = document.getElementById('closeReportModalBtn');
        const confirmReportBtn = document.getElementById('confirmReportBtn');
        const cancelReportBtn = document.getElementById('cancelReportBtn');
        const reportReasonInput = document.getElementById('reportReasonInput');

        closeReportModalBtn.addEventListener('click', () => {
            reportModal.classList.remove('active');
            checkAndResumeAdTimer(); // Resume ads if no other modals are open
        });

        cancelReportBtn.addEventListener('click', () => {
            reportModal.classList.remove('active');
            checkAndResumeAdTimer(); // Resume ads if no other modals are open
        });

        confirmReportBtn.addEventListener('click', () => {
            const reportReason = reportReasonInput.value.trim();
            reportModal.classList.remove('active');
            showMessageBox(
                translations[currentLanguage].reportReceived
                    .replace('{reason}', reportReason ? 'Reason provided: "' + reportReason + '"' : '')
            );
        });

        // Function to render comments
        function renderComments(commentsArray) {
            const commentsList = document.getElementById('commentsList'); // Get comments list container here
            if (!commentsList) return; // Exit if commentsList is not found (shouldn't happen if modal is open)

            commentsList.innerHTML = ''; // Clear existing comments
            commentsArray.forEach((comment, index) => {
                const commentItem = document.createElement('div');
                commentItem.classList.add('comment-item');
                commentItem.innerHTML = `
                    <p><span class="comment-author">${comment.author}:</span> <span class="comment-text">${comment.text}</span></p>
                    <div class="comment-actions">
                        <button class="comment-action-button comment-like-btn" data-comment-index="${index}" data-is-reply="false">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                            <span class="comment-like-count">${formatNumber(comment.likes)}</span>
                        </button>
                        <button class="comment-action-button comment-reply-btn" data-comment-index="${index}">${translations[currentLanguage].postBtn}</button>
                        <span class="comment-reply-count">${comment.replies.length > 0 ? comment.replies.length + ' ' + (currentLanguage === 'en' ? 'replies' : 'majibu') : ''}</span>
                    </div>
                    <div class="reply-section" id="reply-section-${index}">
                        <!-- Replies will be rendered here -->
                    </div>
                `;
                commentsList.appendChild(commentItem);

                // Attach like/reply listeners directly to the buttons within this commentItem
                const likeBtn = commentItem.querySelector('.comment-like-btn');
                const replyBtn = commentItem.querySelector('.comment-reply-btn');
                if (likeBtn) {
                    likeBtn.addEventListener('click', handleCommentLike);
                }
                if (replyBtn) {
                    replyBtn.addEventListener('click', handleCommentReply);
                }

                // Render replies for this comment
                const replySection = document.getElementById(`reply-section-${index}`);
                comment.replies.forEach((reply, replyIndex) => {
                    const replyItem = document.createElement('div');
                    replyItem.classList.add('comment-item'); // Reuse comment-item style
                    replyItem.innerHTML = `
                        <p><span class="comment-author">${reply.author}:</span> <span class="comment-text">${reply.text}</span></p>
                        <div class="comment-actions">
                            <button class="comment-action-button comment-like-btn" data-comment-index="${index}" data-reply-index="${replyIndex}" data-is-reply="true">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                            </svg>
                                <span class="comment-like-count">${formatNumber(reply.likes)}</span>
                            </button>
                        </div>
                    `;
                    replySection.appendChild(replyItem);

                    // Attach like listener directly to the button within this replyItem
                    const replyLikeBtn = replyItem.querySelector('.comment-like-btn');
                    if (replyLikeBtn) {
                        replyLikeBtn.addEventListener('click', handleCommentLike);
                    }
                });
            });
        }

        function handleCommentLike(event) {
            const button = event.currentTarget;
            const commentIndex = parseInt(button.dataset.commentIndex);
            const isReply = button.dataset.isReply === 'true';
            const likeCountSpan = button.querySelector('.comment-like-count');

            let currentLikes;
            if (isReply) {
                const replyIndex = parseInt(button.dataset.replyIndex);
                currentLikes = videoDetails[currentVideoId].comments[commentIndex].replies[replyIndex].likes; // Access current video's comments
                if (button.classList.contains('liked')) {
                    button.classList.remove('liked');
                    currentLikes--;
                } else {
                    button.classList.add('liked');
                    currentLikes++;
                }
                videoDetails[currentVideoId].comments[commentIndex].replies[replyIndex].likes = currentLikes; // Update current video's comments
            } else {
                currentLikes = videoDetails[currentVideoId].comments[commentIndex].likes; // Access current video's comments
                if (button.classList.contains('liked')) {
                    button.classList.remove('liked');
                    currentLikes--;
                } else {
                    button.classList.add('liked');
                    currentLikes++;
                }
                videoDetails[currentVideoId].comments[commentIndex].likes = currentLikes; // Update current video's comments
            }
            likeCountSpan.innerText = formatNumber(currentLikes);
        }

        function handleCommentReply(event) {
            const button = event.currentTarget;
            const commentIndex = parseInt(button.dataset.commentIndex);
            const replySection = document.getElementById(`reply-section-${commentIndex}`);

            // Check if a reply input is already open
            if (replySection.querySelector('.reply-input-group')) {
                replySection.innerHTML = ''; // Close it if already open
                return;
            }

            const replyInputGroup = document.createElement('div');
            replyInputGroup.classList.add('reply-input-group');
            replyInputGroup.innerHTML = `
                <input type="text" placeholder="${translations[currentLanguage].replyEmpty}">
                <button>${translations[currentLanguage].postBtn}</button>
            `;
            replySection.appendChild(replyInputGroup);

            const replyInput = replyInputGroup.querySelector('input');
            const postReplyBtn = replyInputGroup.querySelector('button');

            postReplyBtn.addEventListener('click', () => {
                const replyText = replyInput.value.trim();
                if (replyText) {
                    const newReply = {
                        author: `User_${Math.floor(Math.random() * 10000)}`, // Random user for reply
                        text: replyText,
                        likes: 0
                    };
                    videoDetails[currentVideoId].comments[commentIndex].replies.push(newReply); // Add reply to current video's comments
                    renderComments(videoDetails[currentVideoId].comments); // Re-render all comments to show new reply
                } else {
                    showMessageBox(translations[currentLanguage].replyEmpty);
                }
            });
        }

        // --- Comment Generation Logic ---
        const commentAdjectives = {
            en: ['amazing', 'fantastic', 'game-changing', 'incredible', 'superb', 'awesome', 'mind-blowing', 'revolutionary', 'brilliant', 'powerful'],
            sw: ['noma sana', 'kali', 'poa', 'fiti', 'smart', 'supa', 'mzuri', 'chap chap', 'safi', 'mambo yote']
        };
        const commentNouns = {
            en: ['app', 'predictor', 'tool', 'software', 'system', 'guide', 'strategy'],
            sw: ['kitu', 'programu', 'njia', 'mbinu', 'dawa', 'formula', 'siri']
        };
        const commentVerbs = {
            en: ['improved', 'boosted', 'changed', 'enhanced', 'transformed', 'optimized', 'elevated'],
            sw: ['imeboresha', 'imeongeza', 'imebadilisha', 'imenyanyua', 'imefanya', 'imepiga', 'imeleta']
        };
        const commentPhrases = {
            en: [
                'My win rate has {verb} significantly!', 'This {noun} is {adjective}!', 'I was skeptical, but this really works.',
                'Highly recommend this {noun}.', 'Can\'t believe how much my game {verb}!', 'This video is so {adjective}!',
                'Thanks for the {noun}!', 'Finally found a {noun} that delivers.', 'Worth every penny!',
                'My results are {adjective} after using this.', 'A must-have for any Aviator player.', 'The predictions are spot on.',
                'This {noun} is a true game-changer.', 'So glad I found this!', 'It\'s made a huge difference.',
                'Simple to use and very effective.', 'I\'m consistently winning more now.', 'This is the future of Aviator betting.',
                'Unbelievable accuracy!', 'My friends are asking for my secret!'
            ],
            sw: [
                'Hii {noun} ni {adjective} sana! Nimepiga jackpot mara kadhaa. 🔥', 'Kweli kabisa, inasaidia sana kujua next move. Asante!',
                'Niliwacha Aviator, but hii {noun} imenirudisha. Worth it!', 'Hii tutorial {verb} sana kuelewa. Big up!',
                'Nimejaribu na imefanya kazi! Asante sana kwa hii {noun}.', 'Predictions ziko accurate, nimefurahi sana.',
                'Safi sana! Hii {noun} ni kiboko.', 'Lazima uwe nayo hii {noun}.', 'Imenisaidia sana kushinda zaidi.',
                'Mambo yote na hii {noun}.', 'Hii kitu ni {adjective}! Nimebamba sana.',
                'Wasee mmesema kweli, hii kitu inalipa. Cheza smart na hii {noun}!', 'Hii ganji yangu {verb} na hii {noun}.',
                'Kitu safi, nimechapia mboka na hii {noun}.', 'Form ni {adjective} na hii {noun}.',
                'Mimi hupiga raundi na hii {noun} pekee.', 'Hii {noun} imeniokoa, nimehepa losses.',
                'Maboys wangu wote wanatumia hii {noun}.', 'Hii ni ile kitu, no cap.',
                'Nimekuwa nikitafuta hii {noun} kitambo, finally!'
            ]
        };

        const authorPrefixes = [
            'Gamer', 'AviatorFan', 'ProPlayer', 'BetMaster', 'Lucky', 'Smart', 'User', 'Anonymous', 'Player',
            'Mkali', 'Mjanja', 'Bettor', 'TechSavvy', 'Mzee', 'Sheng', 'Kevo', 'DataAnalyst', 'Mama', 'Random',
            'KiberaFinest', 'RongaKing', 'GithuGamer', 'Nairobian', 'CityBettor'
        ];
        const authorSuffixes = [
            'X', 'Y', 'Z', 'Pro', 'Ace', 'King', 'Queen', '254', 'KE', 'Guru', 'Boss',
            'Jr', 'OG', 'Master', 'Champ', 'Star', 'Boy', 'Gal', 'Predictor', 'Win'
        ];

        const MAX_REPLY_DEPTH = 2; // Limit recursion depth for replies

        function getRandomElement(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        function generateRandomComment(depth = 0) { // Add depth parameter
            let author;
            if (depth > 0) { // For replies, use a simpler author name
                author = `${getRandomElement(authorPrefixes)}_${Math.floor(Math.random() * 9000) + 1000}`;
            } else {
                author = `${getRandomElement(authorPrefixes)}${getRandomElement(authorSuffixes)}${Math.floor(Math.random() * 1000)}`;
            }
            
            let text = getRandomElement(commentPhrases[currentLanguage]);
            text = text.replace('{adjective}', getRandomElement(commentAdjectives[currentLanguage]));
            text = text.replace('{noun}', getRandomElement(commentNouns[currentLanguage]));
            text = text.replace('{verb}', getRandomElement(commentVerbs[currentLanguage]));

            const likes = Math.floor(Math.random() * 500) + 1; // 1 to 500 likes
            
            const replies = [];
            if (depth < MAX_REPLY_DEPTH) { // Only generate replies if depth is less than max
                const numReplies = Math.floor(Math.random() * 3); // 0 to 2 replies
                for (let i = 0; i < numReplies; i++) {
                    replies.push(generateRandomComment(depth + 1)); // Increment depth for recursive call
                }
            }

            return {
                author: author,
                text: text,
                likes: likes,
                replies: replies
            };
        }

        function populateVideoComments(videoId, count) {
            const comments = [];
            for (let i = 0; i < count; i++) {
                comments.push(generateRandomComment()); // Initial call with depth 0
            }
            return comments;
        }

        // Video details including title, description, views, and comments
        let videoDetails = {
            '9smQbuPXsf8': {
                title: {
                    en: "Aviator Predictor for Beginners – 2025 Tutorial",
                    sw: "Mafunzo ya Aviator Predictor kwa Wanaoanza – 2025"
                },
                description: {
                    en: "Dive deep into the mechanics of the Pro Aviator Predictor APK with this comprehensive 2025 tutorial. Learn how to interpret signals, apply strategies, and make data-driven decisions to enhance your Aviator game. This video covers everything from basic setup to advanced usage tips, designed to give you a significant edge.",
                    sw: "Ingia ndani kabisa ya utendaji wa Pro Aviator Predictor APK na mafunzo haya kamili ya 2025. Jifunze jinsi ya kutafsiri ishara, kutumia mikakati, na kufanya maamuzi yanayotokana na data ili kuboresha mchezo wako wa Aviator. Video hii inashughulikia kila kitu kuanzia usanidi wa msingi hadi vidokezo vya matumizi ya hali ya juu, iliyoundwa kukupa faida kubwa."
                },
                views: 33456,
                comments: [] // Will be populated dynamically
            },
            'hF4hqebVrx4': {
                title: {
                    en: "Another Aviator Predictor Live Demonstration",
                    sw: "Onyesho Lingine la Moja kwa Moja la Aviator Predictor"
                },
                description: {
                    en: "Experience the Aviator Predictor in a live, unedited demonstration. This video showcases the app's predictive capabilities during real-time gameplay, highlighting its accuracy and responsiveness. See how it can help you anticipate game outcomes and optimize your betting strategy for better results.",
                    sw: "Pata uzoefu wa Aviator Predictor katika onyesho la moja kwa moja, lisilohaririwa. Video hii inaonyesha uwezo wa utabiri wa programu wakati wa uchezaji wa wakati halisi, ikionyesha usahihi na mwitikio wake. Tazama jinsi inavyoweza kukusaidia kutarajia matokeo ya mchezo na kuboresha mkakati wako wa kubashiri kwa matokeo bora."
                },
                views: 12890,
                comments: [] // Will be populated dynamically
            }
        };

        // Populate comments for each video on load
        const NUM_COMMENTS_PER_VIDEO = 1200;
        videoDetails['9smQbuPXsf8'].comments = populateVideoComments('9smQbuPXsf8', NUM_COMMENTS_PER_VIDEO);
        videoDetails['hF4hqebVrx4'].comments = populateVideoComments('hF4hqebVrx4', NUM_COMMENTS_PER_VIDEO);

        // --- Advertisement Logic ---
        let adTimer;
        const AD_INTERVAL = 10000; // 10 seconds
        const advertisementMessages = {
            en: [
                "Don't just play, predict! Get your Pro Aviator Predictor APK now and boost your wins!",
                "Unlock exclusive insights! The Aviator Predictor APK is your secret weapon. Buy it today!",
                "Tired of losing? Our Pro Aviator Predictor APK gives you the edge. Click to get your copy!",
                "Limited stock! Get the New, Upgraded Aviator Predictor APK before it's gone. Buy now!",
                "Maximize your Aviator profits! The Predictor APK is a must-have for serious players.",
                "The future of Aviator is here. Secure your Pro Aviator Predictor APK and play smarter!",
                "Instant access to winning predictions! Buy your Aviator Predictor APK and start today.",
                "Join the winners' circle! The Pro Aviator Predictor APK is changing the game. Get yours!",
                "Your chance to dominate Aviator! The Predictor APK is waiting for you. Purchase now!",
                "Why guess when you can predict? Grab your Pro Aviator Predictor APK and win big!",
                "Get ahead of the curve! The latest Aviator Predictor APK is now available. Buy a copy!",
                "Experience the power of data! The Pro Aviator Predictor APK makes every bet count."
            ],
            sw: [
                "Usicheze tu, tabiri! Pata Pro Aviator Predictor APK yako sasa na ongeza ushindi wako!",
                "Fungua maarifa ya kipepee! Aviator Predictor APK ni silaha yako ya siri. Nunua leo!",
                "Umechoka kupoteza? Pro Aviator Predictor APK yetu inakupa faida. Bofya ili kupata nakala yako!",
                "Hisia chache! Pata New, Upgraded Aviator Predictor APK kabla haijaisha. Nunua sasa!",
                "Ongeza faida zako za Aviator! Predictor APK ni lazima kwa wachezaji makini.",
                "Baadaye ya Aviator iko hapa. Pata Pro Aviator Predictor APK yako na ucheze kwa akili!",
                "Ufikiaji wa papo hapo wa utabiri wa kushinda! Nunua Aviator Predictor APK yako na uanze leo.",
                "Jiunge na duara la washindi! Pro Aviator Predictor APK inabadilisha mchezo. Pata yako!",
                "Nafasi yako ya kutawala Aviator! Predictor APK inakusubiri. Nunua sasa!",
                "Kwa nini ubashiri wakati unaweza kutabiri? Pata Pro Aviator Predictor APK yako na ushinde kubwa!",
                "Pata mbele ya curve! Aviator Predictor APK ya hivi karibuni inapatikana sasa. Nunua nakala!",
                "Pata uzoefu wa nguvu ya data! Pro Aviator Predictor APK inafanya kila dau kuhesabika."
            ]
        };

        const advertisementModal = document.getElementById('advertisementModal');
        const advertisementText = document.getElementById('advertisementText');
        const closeAdvertisementModalBtn = document.getElementById('closeAdvertisementModalBtn');
        const advertisementBuyNowBtn = document.getElementById('advertisementBuyNowBtn');

        function showAdvertisement() {
            if (isAnyModalOpen()) {
                // If any other modal is open, don't show ad and reschedule
                return;
            }
            const randomMessage = getRandomElement(advertisementMessages[currentLanguage]);
            advertisementText.innerText = randomMessage;
            advertisementModal.classList.add('active');
        }

        function hideAdvertisement() {
            advertisementModal.classList.remove('active');
        }

        function startAdTimer() {
            if (!adTimer) { // Only start if not already running
                adTimer = setInterval(showAdvertisement, AD_INTERVAL);
            }
        }

        function stopAdTimer() {
            if (adTimer) {
                clearInterval(adTimer);
                adTimer = null;
                hideAdvertisement(); // Hide the ad immediately when stopping
            }
        }

        // Check if any major modal is currently active
        function isAnyModalOpen() {
            return document.getElementById('videoModal').classList.contains('active') ||
                   document.getElementById('whatsappPromptModal').classList.contains('active') ||
                   document.getElementById('paymentModal').classList.contains('active') ||
                   document.getElementById('reportModal').classList.contains('active') ||
                   document.getElementById('messageBoxOverlay').classList.contains('active') ||
                   document.getElementById('exitIntentModal').classList.contains('active'); // Include exit intent modal
        }

        // Function to check and resume ad timer when a modal closes
        function checkAndResumeAdTimer() {
            if (!isAnyModalOpen()) {
                startAdTimer();
            }
        }

        // Event listeners for advertisement modal
        closeAdvertisementModalBtn.addEventListener('click', hideAdvertisement);
        advertisementBuyNowBtn.addEventListener('click', () => {
            hideAdvertisement();
            // Scroll to the payment section
            document.querySelector('.payment-section').scrollIntoView({ behavior: 'smooth' });
            // Optionally, open the payment modal directly if that's the desired flow
            // document.getElementById('paymentModal').classList.add('active');
        });

        // Start the advertisement timer when the page loads
        window.onload = startAdTimer;


        // --- Exit Intent Modal Logic ---
        let exitIntentShown = false; // Flag to ensure it only shows once per page load
        const exitIntentModal = document.getElementById('exitIntentModal');
        const stayOnPageBtn = document.getElementById('stayOnPageBtn');
        const leaveAnywayBtn = document.getElementById('leaveAnywayBtn');

        function showExitIntentModal() {
            if (!exitIntentShown && !isAnyModalOpen()) {
                exitIntentModal.classList.add('active');
                exitIntentShown = true; // Set flag to true so it doesn't show again
                stopAdTimer(); // Pause regular ads when exit intent is shown
            }
        }

        function hideExitIntentModal() {
            exitIntentModal.classList.remove('active');
            checkAndResumeAdTimer(); // Resume regular ads once exit intent is hidden
        }

        // Detect mouse leaving the top of the viewport
        document.documentElement.addEventListener('mouseout', (e) => {
            if (e.clientY < 0 && e.relatedTarget === null) {
                // Mouse is leaving the top of the browser window
                showExitIntentModal();
            }
        });

        // Event listeners for exit intent modal buttons
        stayOnPageBtn.addEventListener('click', () => {
            hideExitIntentModal();
            // Optionally, scroll to the payment section or highlight it
            document.querySelector('.payment-section').scrollIntoView({ behavior: 'smooth' });
        });

        leaveAnywayBtn.addEventListener('click', () => {
            // Allow the user to leave the page
            hideExitIntentModal(); // Hide the modal first
            // No explicit action needed, letting the browser handle navigation
            // If you wanted to force navigation, you could use window.location.href = "some-other-page.html";
        });

        // --- Countdown Timer Logic ---
        const countdownTimerElement = document.getElementById('countdownTimer');
        
        // Set the target time: current time + 13 hours, 45 minutes, 10 seconds
        const targetTime = new Date();
        targetTime.setHours(targetTime.getHours() + 13);
        targetTime.setMinutes(targetTime.getMinutes() + 45);
        targetTime.setSeconds(targetTime.getSeconds() + 10);

        let countdownInterval;

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetTime.getTime() - now;

            if (distance < 0) {
                clearInterval(countdownInterval);
                countdownTimerElement.innerText = "EXPIRED";
                return;
            }

            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownTimerElement.innerText = 
                `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        // Start the countdown when the page loads
        countdownInterval = setInterval(updateCountdown, 1000);

        // --- Testimonials Section Logic ---
        const testimonials = [
            { id: 1, text: { en: "This predictor is a game-changer! My wins have significantly increased since I started using it.", sw: "Predictor hii imebadilisha mchezo! Ushindi wangu umeongezeka sana tangu nianze kuitumia." }, author: "John D." },
            { id: 2, text: { en: "I was skeptical at first, but the accuracy is truly impressive. Highly recommended!", sw: "Nilikuwa na mashaka mwanzoni, lakini usahihi wake unavutia sana. Ninapendekeza sana!" }, author: "Sarah M." },
            { id: 3, text: { en: "Easy to use and very effective. It's helped me make smarter betting decisions.", sw: "Rahisi kutumia na yenye ufanisi mkubwa. Imenisaidia kufanya maamuzi bora ya kubashiri." }, author: "David K." },
            { id: 4, text: { en: "A must-have for any serious Aviator player. The insights are invaluable.", sw: "Ni lazima kuwa nayo kwa mchezaji yeyote makini wa Aviator. Maarifa yake ni ya thamani sana." }, author: "Emily R." },
            { id: 5, text: { en: "The best Aviator tool out there! I'm consistently profitable now.", sw: "Zana bora zaidi ya Aviator huko nje! Nina faida mfululizo sasa." }, author: "Michael B." },
            { id: 6, text: { en: "I've tried others, but this one stands out. Great job, developers!", sw: "Nimejaribu zingine, lakini hii inajitokeza. Kazi nzuri, waendelezaji!" }, author: "Grace W." },
            { id: 7, text: { en: "Incredible accuracy, it's like having a crystal ball for Aviator. My friends are amazed.", sw: "Usahihi wa ajabu, ni kama kuwa na mpira wa kioo kwa Aviator. Marafiki zangu wameshangaa." }, author: "Alex P." },
            { id: 8, text: { en: "The interface is so clean and intuitive. Makes predicting fun and easy.", sw: "Kiolesura ni safi na rahisi sana kutumia. Inafanya utabiri uwe wa kufurahisha na rahisi." }, author: "Sophia L." },
            { id: 9, text: { en: "Worth every penny! This app pays for itself in no time.", sw: "Inastahili kila senti! Programu hii inajilipa yenyewe kwa muda mfupi." }, author: "Chris T." },
            { id: 10, text: { en: "My confidence in playing Aviator has soared thanks to this predictor. Thank you!", sw: "Kujiamini kwangu katika kucheza Aviator kumeongezeka sana kutokana na predictor hii. Asante!" }, author: "Olivia C." }
        ];

        let currentTestimonialIndex = 0;
        const testimonialTrack = document.getElementById('testimonialTrack');
        const prevTestimonialBtn = document.getElementById('prevTestimonialBtn');
        const nextTestimonialBtn = document.getElementById('nextTestimonialBtn');
        const testimonialForm = document.getElementById('testimonial-form');
        const testimonialInput = document.getElementById('testimonialInput');
        const testimonialAuthorInput = document.getElementById('testimonialAuthor');

        function renderTestimonials() {
            testimonialTrack.innerHTML = ''; // Clear existing testimonials
            testimonials.forEach(testimonial => {
                const testimonialItem = document.createElement('div');
                testimonialItem.classList.add('testimonial-item');
                testimonialItem.innerHTML = `
                    <p class="testimonial-text">"${testimonial.text[currentLanguage] || testimonial.text.en}"</p>
                    <p class="testimonial-author">- ${testimonial.author}</p>
                `;
                testimonialTrack.appendChild(testimonialItem);
            });
            updateTestimonialCarousel(); // Ensure correct position after re-render
        }

        function updateTestimonialCarousel() {
            const offset = -currentTestimonialIndex * 100;
            testimonialTrack.style.transform = `translateX(${offset}%)`;
        }

        prevTestimonialBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonialCarousel();
        });

        nextTestimonialBtn.addEventListener('click', () => {
            currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
            updateTestimonialCarousel();
        });

        testimonialForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const text = testimonialInput.value.trim();
            const author = testimonialAuthorInput.value.trim() || translations[currentLanguage].testimonialAuthorDefault;

            if (text) {
                const newTestimonial = {
                    id: testimonials.length + 1,
                    text: { en: text, sw: text }, // For simplicity, new testimonials are same in both languages
                    author: author
                };
                testimonials.push(newTestimonial);
                renderTestimonials(); // Re-render to include new testimonial
                testimonialInput.value = '';
                testimonialAuthorInput.value = '';
                showMessageBox(translations[currentLanguage].testimonialSubmitted);
            } else {
                showMessageBox(translations[currentLanguage].testimonialEmpty);
            }
        });

        // --- FAQ Section Logic ---
        const faqData = [
            {
                question: { en: "How accurate are the predictions?", sw: "Utabiri ni sahihi kiasi gani?" },
                answer: { en: "Our predictions are based on advanced algorithms and historical data analysis, aiming for high accuracy. However, no prediction is 100% guaranteed in a game of chance.", sw: "Utabiri wetu unatokana na algoriti za hali ya juu na uchambuzi wa data ya kihistoria, ukilenga usahihi wa hali ya juu. Hata hivyo, hakuna utabiri unaohakikishiwa 100% katika mchezo wa bahati nasibu." }
            },
            {
                question: { en: "Is the app safe and legal to use?", sw: "Je, programu ni salama na halali kutumia?" },
                answer: { en: "Yes, the app is designed to be a utility tool for analysis and prediction. It does not interfere with the game's mechanics or violate any gaming platform's terms of service.", sw: "Ndio, programu imeundwa kuwa zana ya uchambuzi na utabiri. Haiingiliani na utendaji wa mchezo au kukiuka masharti yoyote ya huduma ya jukwaa la michezo ya kubahatisha." }
            },
            {
                question: { en: "How do I receive the APK after payment?", sw: "Nitaipokeaje APK baada ya malipo?" },
                answer: { en: "After successful M-Pesa payment, our system automatically detects your transaction. You will receive an automated WhatsApp message with the APK download link and installation guide within minutes.", sw: "Baada ya malipo ya M-Pesa kufanikiwa, mfumo wetu hugundua muamala wako kiotomatiki. Utapokea ujumbe wa WhatsApp wa kiotomatiki na kiungo cha kupakua APK na mwongozo wa usakinishaji ndani ya dakika chache." }
            },
            {
                question: { en: "What if the app doesn't work on my device?", sw: "Je, ikiwa programu haifanyi kazi kwenye kifaa changu?" },
                answer: { en: "The app is compatible with most Android devices. If you encounter issues, please contact our support team via WhatsApp with your device details for assistance.", sw: "Programu inaoana na vifaa vingi vya Android. Ukikumbana na matatizo, tafadhali wasiliana na timu yetu ya usaidizi kupitia WhatsApp na maelezo ya kifaa chako kwa msaada." }
            },
            {
                question: { en: "Are there any recurring fees?", sw: "Je, kuna ada za mara kwa mara?" },
                answer: { en: "No, the purchase of the Pro Aviator Predictor APK is a one-time payment. You get lifetime access to the current version and all future updates.", sw: "Hapana, ununuzi wa Pro Aviator Predictor APK ni malipo ya mara moja. Unapata ufikiaji wa maisha yote kwa toleo la sasa na sasisho zote za baadaye." }
            }
        ];

        const faqListContainer = document.getElementById('faqList');
        const faqSearchInput = document.getElementById('faqSearchInput');

        function renderFAQs(faqsToRender) {
            faqListContainer.innerHTML = '';
            faqsToRender.forEach((faq, index) => {
                const faqItem = document.createElement('div');
                faqItem.classList.add('faq-item');
                faqItem.innerHTML = `
                    <div class="faq-question">
                        <span>${faq.question[currentLanguage] || faq.question.en}</span>
                        <span class="arrow">▼</span>
                    </div>
                    <div class="faq-answer">
                        <p>${faq.answer[currentLanguage] || faq.answer.en}</p>
                    </div>
                `;
                faqListContainer.appendChild(faqItem);

                faqItem.querySelector('.faq-question').addEventListener('click', () => {
                    faqItem.classList.toggle('active');
                    const answer = faqItem.querySelector('.faq-answer');
                    if (faqItem.classList.contains('active')) {
                        answer.style.maxHeight = answer.scrollHeight + "px"; // Set max-height to scrollHeight for smooth animation
                        answer.style.padding = "1rem 1.5rem"; // Restore padding
                    } else {
                        answer.style.maxHeight = "0";
                        answer.style.padding = "0 1.5rem"; // Collapse padding
                    }
                });
            });
        }

        faqSearchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value.toLowerCase();
            const filteredFaqs = faqData.filter(faq => 
                (faq.question.en.toLowerCase().includes(searchTerm) || faq.question.sw.toLowerCase().includes(searchTerm)) ||
                (faq.answer.en.toLowerCase().includes(searchTerm) || faq.answer.sw.toLowerCase().includes(searchTerm))
            );
            renderFAQs(filteredFaqs);
        });

        // --- Scroll to Top Button Logic ---
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        };

        // When the user clicks on the button, scroll to the top of the document
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }


        // Initial renders on page load
        document.addEventListener('DOMContentLoaded', () => {
            applyTranslations(); // Apply translations based on default language
            renderTestimonials(); // Render testimonials initially
            renderFAQs(faqData); // Render all FAQs initially
        });

    </script>

</body>
</html>
