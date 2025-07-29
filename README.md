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
            max-height: 300px; /* Increased height */
            overflow-y: auto;
            border: 1px solid #ddd; /* Lighter border */
            border-radius: var(--border-radius);
            padding: 0.8rem; /* More padding */
            background-color: #fcfcfc;
            box-shadow: inset 0 1px 3px rgba(0,0,0,0.05); /* Inner shadow */
        }

        .comment-item {
            padding: 1rem 0.8rem; /* More padding */
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
                </but
