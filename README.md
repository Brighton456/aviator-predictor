<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pro Aviator Predictor APK - Get Started</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #E74C3C; /* Red */
            --secondary-color: #F8F8F8; /* Off-white */
            --text-color: #222222; /* Dark black */
            --background-color: #FFFFFF; /* Pure white */
            --border-radius: 8px;
            --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--secondary-color);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            max-width: 900px;
            width: 95%;
            margin: 2rem auto;
            background-color: var(--background-color);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
        }

        header {
            background-color: var(--primary-color);
            color: white;
            text-align: center;
            padding: 3rem 1.5rem;
        }

        header h1 {
            margin: 0;
            font-size: 5rem; /* Base size for "Pro Aviator Predictor" */
        }

        header h1 .apk-small { /* New style for APK */
            font-size: 2.5rem; /* Half of 5rem */
        }

        header p {
            margin: 0.5rem 0 0;
            font-size: 1.2rem;
            opacity: 0.8;
        }

        .content {
            padding: 2rem;
        }

        .product-section, .payment-section, .features-section, .availability-section, .mpesa-instructions-section, .video-display-section {
            margin-bottom: 2rem;
        }

        h2 {
            font-size: 1.8rem;
            color: var(--primary-color);
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
        }
        
        h3 { /* Adjusted for mini heading */
            color: white;
            margin-top: 0.5rem;
            font-size: 2.5rem; /* Same size as the adjusted APK font */
            opacity: 0.9;
        }

        .feature-list, .how-to-use-list, .tips-list, .platform-list, .mpesa-steps {
            list-style: none;
            padding: 0;
        }

        .feature-list li, .how-to-use-list li, .tips-list li, .platform-list li, .mpesa-steps li {
            background-color: var(--secondary-color);
            margin-bottom: 0.5rem;
            padding: 0.8rem 1rem;
            border-left: 3px solid var(--primary-color);
            border-radius: var(--border-radius);
        }

        .payment-box {
            background-color: var(--secondary-color);
            border: 2px solid var(--primary-color);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            text-align: center;
        }

        .payment-box .price {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary-color);
            margin: 0.5rem 0;
        }

        .payment-details p {
            font-size: 1.1rem;
            margin: 0.5rem 0;
        }

        .payment-details strong {
            color: var(--primary-color);
        }

        .phone-number-display {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }

        .copy-btn {
            background-color: #555;
            color: white;
            border: none;
            padding: 0.4rem 0.8rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background-color 0.3s ease;
        }

        .copy-btn:hover {
            background-color: #333;
        }

        form {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        form label {
            font-weight: bold;
            color: #555;
        }

        form input[type="text"] {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ccc;
            border-radius: var(--border-radius);
            box-sizing: border-box;
        }

        form button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 1rem;
            font-size: 1.1rem;
            font-weight: bold;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        form button:hover {
            background-color: #C0392B; /* Darker red on hover */
        }
        
        footer {
            text-align: center;
            padding: 1.5rem;
            background-color: #1A1A1A; /* Near black */
            color: white;
            font-size: 0.9rem;
        }

        .urgency-banner {
            background-color: #FFD700; /* Gold color for attention */
            color: #333;
            padding: 1rem 1.5rem;
            text-align: center;
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
        }

        .manual-confirm-btn {
            background-color: #3498DB; /* Blue for action */
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
            font-weight: bold;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 1rem;
        }

        .manual-confirm-btn:hover {
            background-color: #217DBB; /* Darker blue on hover */
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
            background-color: rgba(255, 255, 255, 0.9); /* White overlay */
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
            background-color: #FFFFFF; /* Pure white background for modal content */
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            width: 90%;
            max-width: 800px;
            padding: 1.5rem;
            position: relative;
            color: var(--text-color); /* Dark text for readability */
            transform: scale(0.95);
            transition: transform 0.3s ease;
            overflow-y: auto; /* Make modal content scrollable if it gets too long */
            max-height: 90vh; /* Limit modal height */
        }

        .modal-overlay.active .modal-content {
            transform: scale(1);
        }

        .modal-close-btn {
            position: absolute;
            top: 10px;
            left: 15px; /* Positioned to the left for "go back" */
            background: none;
            border: none;
            color: var(--text-color); /* Dark color for close button */
            font-size: 1.8rem;
            cursor: pointer;
            z-index: 1001;
            display: flex; /* To align icon and text if needed */
            align-items: center;
            gap: 5px;
        }
        .modal-close-btn svg {
            width: 24px;
            height: 24px;
            fill: var(--text-color);
        }

        /* Specific styles for video modal */
        .video-modal-player-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
            margin-bottom: 1rem;
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
            justify-content: space-around;
            align-items: center;
            margin-top: 1rem;
            flex-wrap: wrap;
            gap: 1rem;
            border-bottom: 1px solid #eee; /* Separator */
            padding-bottom: 1rem;
        }

        .interaction-button {
            background-color: #eee; /* Light gray for buttons */
            color: var(--text-color);
            border: none;
            padding: 0.8rem 1.2rem;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease, color 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .interaction-button:hover {
            background-color: #ddd;
        }

        .interaction-button.liked {
            background-color: #007bff; /* Blue for liked */
            color: white;
        }

        .interaction-button.subscribed {
            background-color: #28a745; /* Green for subscribed */
            color: white;
        }

        /* New styles for like button as thumbnail */
        .like-button-thumbnail {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #eee; /* Light gray background */
            padding: 0.5rem 1rem;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            min-width: 80px; /* Ensure it's wide enough for text and icon */
            color: var(--text-color);
        }

        .like-button-thumbnail:hover {
            background-color: #ddd;
        }

        .like-button-thumbnail svg {
            width: 28px;
            height: 28px;
            margin-bottom: 0.2rem;
            fill: var(--text-color); /* Dark icon color */
        }

        .like-button-thumbnail .like-count {
            font-size: 0.9rem;
            font-weight: bold;
            color: #555; /* Darker count color */
        }

        .like-button-thumbnail.liked {
            background-color: #007bff; /* Blue when liked */
            color: white;
        }

        .like-button-thumbnail.liked svg {
            fill: white; /* White icon when liked */
        }
        .like-button-thumbnail.liked .like-count {
            color: white;
        }

        .video-info-section {
            margin-top: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
        }

        .video-views {
            font-size: 0.9rem;
            color: #555;
            margin-bottom: 0.5rem;
        }

        .video-description {
            font-size: 0.95rem;
            color: #444;
            line-height: 1.5;
        }

        .developer-note-section {
            margin-top: 1.5rem;
            padding: 1rem;
            background-color: #f0f0f0; /* Light background for the note */
            border-radius: var(--border-radius);
            border: 1px solid #e0e0e0;
            font-size: 0.9rem;
            color: #333;
        }
        .developer-note-section h5 {
            margin-top: 0;
            color: var(--primary-color);
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        .comment-section {
            margin-top: 1.5rem;
            padding-top: 1rem;
            border-top: 1px solid #ccc; /* Lighter border */
        }

        .comment-section h4 {
            color: var(--text-color);
        }

        .comment-input-group {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }

        .comment-input-group input {
            flex-grow: 1;
            padding: 0.6rem;
            border-radius: 5px;
            border: 1px solid #ccc; /* Lighter border */
            background-color: #f5f5f5; /* Lighter background */
            color: var(--text-color);
        }

        .comment-input-group button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 0.6rem 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .comment-input-group button:hover {
            background-color: #C0392B;
        }

        .comments-list {
            max-height: 250px; /* Increased height for more comments */
            overflow-y: auto;
            border: 1px solid #ccc; /* Lighter border */
            border-radius: 5px;
            padding: 0.5rem;
            background-color: #fcfcfc; /* Very light background */
        }

        .comment-item {
            padding: 0.8rem 0.5rem;
            border-bottom: 1px solid #eee; /* Very light border */
            font-size: 0.9rem;
        }

        .comment-item:last-child {
            border-bottom: none;
        }

        .comment-author {
            font-weight: bold;
            color: var(--primary-color);
            margin-right: 0.5rem;
        }

        .comment-text {
            color: #444; /* Darker text for comments */
        }

        .comment-actions {
            display: flex;
            gap: 1rem;
            margin-top: 0.5rem;
            font-size: 0.8rem;
            color: #777; /* Lighter gray for actions */
            align-items: center;
        }

        .comment-action-button {
            background: none;
            border: none;
            color: #777; /* Lighter gray for action buttons */
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            transition: color 0.3s ease;
        }

        .comment-action-button:hover {
            color: #333; /* Darker on hover */
        }

        .comment-action-button.liked {
            color: #007bff;
        }

        .comment-action-button svg {
            width: 16px;
            height: 16px;
            fill: #777; /* Default icon color */
        }

        .comment-action-button.liked svg {
            fill: #007bff; /* Liked icon color */
        }

        .reply-section {
            margin-top: 0.8rem;
            margin-left: 1.5rem; /* Indent replies */
            border-left: 2px solid #ddd; /* Lighter border */
            padding-left: 0.8rem;
        }

        .reply-input-group {
            display: flex;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }

        .reply-input-group input {
            flex-grow: 1;
            padding: 0.5rem;
            border-radius: 5px;
            border: 1px solid #ccc;
            background-color: #f5f5f5;
            color: var(--text-color);
            font-size: 0.85rem;
        }

        .reply-input-group button {
            background-color: #aaa; /* Gray for reply button */
            color: white;
            border: none;
            padding: 0.5rem 0.8rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            font-size: 0.85rem;
        }

        .reply-input-group button:hover {
            background-color: #888;
        }

        /* Video Thumbnail/Preview Styles */
        .video-preview {
            cursor: pointer;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--box-shadow);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            margin-bottom: 1.5rem; /* Spacing between video previews */
            position: relative; /* Needed for absolute positioning of play icon */
        }

        .video-preview:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }

        .video-preview img {
            width: 100%;
            height: auto;
            display: block;
        }

        .video-preview-title {
            padding: 0.8rem;
            background-color: #333;
            color: white;
            font-size: 1.1rem;
            font-weight: bold;
            text-align: center;
        }

        /* Play Icon Overlay */
        .play-icon-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 60px; /* Size of the play icon */
            height: 60px;
            background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none; /* Allow clicks to pass through to the parent */
            transition: background-color 0.3s ease;
        }

        .video-preview:hover .play-icon-overlay {
            background-color: rgba(0, 0, 0, 0.8); /* Darker on hover */
        }

        .play-icon-overlay svg {
            fill: white;
            width: 30px; /* Size of the play arrow */
            height: 30px;
        }

        /* WhatsApp Prompt Modal Specific Styles */
        #whatsappPromptModal .modal-content {
            max-width: 400px;
            text-align: center;
            padding-top: 3rem; /* More space for close button */
        }
        #whatsappPromptModal .modal-content h4 {
            margin-top: 0;
            color: var(--primary-color);
        }
        #whatsappPromptModal .modal-content input[type="text"] {
            margin-bottom: 1rem;
        }
        #whatsappPromptModal .modal-content button {
            width: 100%;
            padding: 0.8rem;
            font-size: 1rem;
        }

        /* Payment Modal Specific Styles */
        #paymentModal .modal-content {
            max-width: 550px;
            padding-top: 3rem; /* More space for close button */
        }
        #paymentModal .modal-content .payment-box {
            background-color: var(--secondary-color);
            border: 2px solid var(--primary-color);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            text-align: center;
        }
        #paymentModal .modal-content .price {
            font-size: 2rem;
            font-weight: bold;
            color: var(--primary-color);
            margin: 0.5rem 0;
        }
        #paymentModal .modal-content .payment-details p {
            font-size: 1.1rem;
            margin: 0.5rem 0;
        }
        #paymentModal .modal-content .payment-details strong {
            color: var(--primary-color);
        }
        #paymentModal .modal-content .phone-number-display {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
        }
        #paymentModal .modal-content .mpesa-instructions-section {
            margin-top: 2rem;
            text-align: left;
        }
        #paymentModal .modal-content .mpesa-instructions-section h2 {
            font-size: 1.5rem;
            border-bottom: 1px solid var(--primary-color);
            padding-bottom: 0.3rem;
        }
        #paymentModal .modal-content .mpesa-steps li {
            background-color: #f5f5f5;
            margin-bottom: 0.5rem;
            padding: 0.6rem 0.8rem;
            border-left: 3px solid var(--primary-color);
            border-radius: var(--border-radius);
        }

        @media (max-width: 768px) {
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
                font-size: 1.5rem;
            }
            .urgency-banner {
                font-size: 1rem;
                padding: 0.8rem 1rem;
            }
            .modal-content {
                width: 95%;
                padding: 1rem;
            }
            .video-interactions {
                flex-direction: column;
            }
            .advertisement-modal-overlay {
                bottom: 10px;
                right: 10px;
                left: 10px; /* Make it full width on small screens */
                justify-content: center;
                align-items: center;
            }
            .advertisement-modal-content {
                max-width: 90%; /* Adjust width on small screens */
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
            background-color: rgba(0, 0, 0, 0.3); /* Slightly darker overlay */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000; /* Higher than modals */
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
            padding: 20px;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            text-align: center;
            max-width: 300px;
            width: 80%;
            transform: translateY(-20px);
            transition: transform 0.3s ease;
        }

        .message-box-overlay.active .message-box-content {
            transform: translateY(0);
        }

        .message-box-content p {
            margin: 0 0 15px 0;
            font-size: 1.1rem;
            color: var(--text-color);
        }

        .message-box-content button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background-color 0.3s ease;
        }

        .message-box-content button:hover {
            background-color: #C0392B;
        }

        /* Report Modal Specific Styles */
        #reportModal .modal-content {
            max-width: 500px;
            text-align: center;
            padding-top: 3rem;
        }
        #reportModal .modal-content h4 {
            margin-top: 0;
            color: var(--primary-color);
        }
        #reportModal .modal-content textarea {
            width: calc(100% - 20px);
            padding: 10px;
            margin-top: 15px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: var(--border-radius);
            resize: vertical;
            min-height: 80px;
        }
        #reportModal .modal-content .report-actions {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
        }
        #reportModal .modal-content .report-actions button {
            flex-grow: 1;
            padding: 10px 15px;
            font-size: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        #reportModal .modal-content #confirmReportBtn {
            background-color: #E74C3C; /* Primary color for confirm */
            color: white;
            border: none;
        }
        #reportModal .modal-content #confirmReportBtn:hover {
            background-color: #C0392B;
        }
        #reportModal .modal-content #cancelReportBtn {
            background-color: #ccc; /* Gray for cancel */
            color: var(--text-color);
            border: none;
        }
        #reportModal .modal-content #cancelReportBtn:hover {
            background-color: #bbb;
        }

        /* Advertisement Modal Styles */
        .advertisement-modal-overlay {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1500; /* Between general modals and message box */
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            display: flex;
            justify-content: flex-end; /* Align to right */
            align-items: flex-end; /* Align to bottom */
            pointer-events: none; /* Initially non-interactive */
        }

        .advertisement-modal-overlay.active {
            opacity: 1;
            visibility: visible;
            pointer-events: auto; /* Make interactive when active */
        }

        .advertisement-modal-content {
            background-color: #f9f9f9;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            padding: 15px;
            max-width: 280px;
            position: relative;
            text-align: center;
            transform: translateY(20px);
            transition: transform 0.3s ease;
        }

        .advertisement-modal-overlay.active .advertisement-modal-content {
            transform: translateY(0);
        }

        .advertisement-close-btn {
            position: absolute;
            top: 5px;
            right: 10px;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #888;
        }

        .advertisement-close-btn:hover {
            color: #333;
        }

        .advertisement-modal-content p {
            margin: 0 0 10px 0;
            font-size: 0.95rem;
            color: var(--text-color);
        }

        .advertisement-buy-now-btn {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background-color 0.3s ease;
        }

        .advertisement-buy-now-btn:hover {
            background-color: #C0392B;
        }

        /* Exit Intent Modal Styles */
        .exit-intent-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7); /* Darker overlay to grab attention */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2500; /* Highest z-index */
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
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            width: 90%;
            max-width: 500px;
            padding: 2rem;
            text-align: center;
            transform: translateY(-50px);
            transition: transform 0.3s ease;
        }

        .exit-intent-modal-overlay.active .exit-intent-modal-content {
            transform: translateY(0);
        }

        .exit-intent-modal-content h4 {
            color: var(--primary-color);
            font-size: 1.8rem;
            margin-bottom: 1rem;
        }

        .exit-intent-modal-content p {
            font-size: 1.1rem;
            color: var(--text-color);
            margin-bottom: 1.5rem;
        }

        .exit-intent-modal-content .price {
            font-size: 2.5rem;
            font-weight: bold;
            color: #28a745; /* Green for special offer */
            margin-bottom: 1.5rem;
        }

        .exit-intent-modal-actions {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .exit-intent-modal-actions button {
            padding: 1rem;
            font-size: 1.1rem;
            font-weight: bold;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: background-color 0.3s ease, color 0.3s ease;
            border: none;
        }

        .exit-intent-modal-actions .stay-btn {
            background-color: var(--primary-color);
            color: white;
        }

        .exit-intent-modal-actions .stay-btn:hover {
            background-color: #C0392B;
        }

        .exit-intent-modal-actions .leave-btn {
            background-color: #ccc;
            color: var(--text-color);
        }

        .exit-intent-modal-actions .leave-btn:hover {
            background-color: #bbb;
        }
    </style>
</head>
<body>

    <div class="container">
        <header>
            <h1>Pro Aviator Predictor <span class="apk-small">APK</span></h1>
            <h3>Latest version MQ2#XCVK</h3>
            <p style="margin-top: 1.5rem; font-size: 1rem; opacity: 0.9;">
                Introducing the **New, Upgraded Version** of the Aviator Predictor App! We've enhanced stability and performance after the previous version experienced massive traffic. Get ready for an even smoother experience.
            </p>
        </header>

        <div class="content">
            <div class="urgency-banner">
                ⚡️ **LIMITED-TIME OPPORTUNITY!** Get your Pro Aviator Predictor APK now. Don't miss out on this enhanced version!
            </div>

            <div class="product-section">
                <h2>About the Pro Aviator Predictor APK</h2>
                <p>Aviator Predictor APK is a powerful utility application designed to give you a strategic advantage in the popular and challenging Aviator game. Developed on a solid mathematical model, this app provides data-driven predictions and analysis to help you make smarter, more informed decisions, moving beyond pure luck.</p>
                <p>The app focuses on providing intelligent predictions based on data and algorithms, not a "magic key" to victory. It's a tool to complement your skill and understanding of the game, helping you optimize your chances of winning.</p>
            </div>

            <div class="video-display-section">
                <h2>Watch Our Videos</h2>
                <p style="text-align: center; margin-top: 1rem; font-size: 0.95rem; color: #555;">
                    Click on any video below to watch it in a full-screen, interactive player.
                </p>

                <!-- Video 1 Preview -->
                <div class="video-preview" data-video-id="9smQbuPXsf8" data-start-time="13" data-video-title="Aviator Predictor for Beginners – 2025 Tutorial">
                    <img src="https://img.youtube.com/vi/9smQbuPXsf8/hqdefault.jpg" alt="Video Thumbnail">
                    <div class="play-icon-overlay">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div class="video-preview-title">Live Performance Streaming</div>
                </div>
                <p style="text-align: center; margin-top: 0.5rem; font-size: 0.85rem; color: #777;">
                    *Please note: The video may appear blurred in some areas for privacy and security purposes.*
                </p>

                <!-- Video 2 Preview -->
                <div class="video-preview" data-video-id="hF4hqebVrx4" data-start-time="10" data-video-title="Another Aviator Predictor Live Demonstration">
                    <img src="https://img.youtube.com/vi/hF4hqebVrx4/hqdefault.jpg" alt="Video Thumbnail">
                    <div class="play-icon-overlay">
                        <svg viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                    <div class="video-preview-title">Another Live Demonstration</div>
                </div>
            </div>

            <div class="payment-section">
                <h2>Ready to Gain Your Edge?</h2>
                <div class="payment-box">
                    <p>Unlock the power of the Pro Aviator Predictor APK for a single, low investment:</p>
                    <div class="price">KES 550</div>
                    <p>Your journey to smarter predictions begins with a simple M-Pesa transfer. Here's how to secure your copy:</p>
                    <div class="payment-details">
                        <p><strong>Step 1: Your M-Pesa Payment</strong></p>
                        <p>Send **KES 550** to the following secure details:</p>
                        <p class="phone-number-display">
                            Phone Number: <strong id="mpesa-number">0720363215</strong> 
                            <button class="copy-btn" onclick="copyMpesaNumber()">Copy</button>
                        </p>
                        <p>Recipient Name: <strong>Patrick Wanjala</strong></p>
                        <p style="font-size: 0.95rem; margin-top: 1rem; color: #555;">
                            **Instant Access!** Your payment will be **automatically detected** within moments.
                        </p>
                    </div>

                    <button id="show-manual-form-btn" class="manual-confirm-btn">
                        Payment not detected? Click here to confirm manually.
                    </button>

                    <div id="manual-payment-form-container" class.hidden">
                        <form id="payment-form">
                            <p><strong>Step 2: Manual Payment Confirmation</strong></p>
                            <label for="transaction_id">M-Pesa Transaction ID:</label>
                            <input type="text" id="transaction_id" name="transaction_id" placeholder="e.g., QX123AB45C" required>

                            <label for="whatsapp_number_main">Your WhatsApp Number:</label>
                            <input type="text" id="whatsapp_number_main" name="whatsapp_number_main" placeholder="e.g., 07XXXXXXXX" required>

                            <button type="submit">Send My Details</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div class="mpesa-instructions-section">
                <h2>How to Send Money via M-Pesa (Safaricom)</h2>
                <p>Follow these quick steps on your phone to complete your payment:</p>
                <ol class="mpesa-steps">
                    <li>Go to your **M-Pesa Menu** on your phone.</li>
                    <li>Select **"Send Money"**.</li>
                    <li>Enter the Phone Number: <strong id="mpesa-number-instructions">0720363215</strong></li>
                    <li>Enter the Amount: **KES 550**</li>
                    <li>Confirm the Recipient Name is **Patrick Wanjala**.</li>
                    <li>Enter your M-Pesa PIN and press OK.</li>
                    <li>You will receive an M-Pesa confirmation SMS. Please keep this SMS for your records.</li>
                </ol>
            </div>

            <div class="features-section">
                <h2>Key Features and Benefits</h2>
                <ul class="feature-list">
                    <li><strong>Smart Prediction:</strong> Get algorithm-based predictions to inform your betting decisions.</li>
                    <li><strong>Statistics and Analysis:
                        Access statistical information to better understand game situations.</li>
                    <li><strong>Continuous Updates:</strong> The app updates continuously to reflect in-game parameters.</li>
                    <li><strong>Friendly Interface:</strong> A clean and easy-to-use design for a seamless user experience.</li>
                </ul>
            </div>

            <div class="how-to-use-section">
                <h2>Instructions for Use</h2>
                <ul class="how-to-use-list">
                    <li><strong>Download and Installation:</strong> Once payment is confirmed, you will receive an automated message with the APK file and user guide directly to your WhatsApp.</li>
                    <li><strong>Use of Features:</strong> Use the predictions and analysis from the app to guide your decisions.</li>
                    <li><strong>Performance Tracking:</strong> Track your results and adjust your strategy to find what works best.</li>
                </ul>
            </div>

            <div class="availability-section">
                <h2>Compatible Betting Platforms</h2>
                <p>The Pro Aviator Predictor APK is designed to work seamlessly with the following popular betting platforms:</p>
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
        </div>

        <footer>
            <p>&copy; 2025 Pro Aviator Predictor. All Rights Reserved.</p>
        </footer>
    </div>

    <!-- Video Modal Structure -->
    <div class="modal-overlay hidden" id="videoModal">
        <div class="modal-content">
            <button class="modal-close-btn" id="closeVideoModalBtn">
                <svg viewBox="0 0 24 24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
                </svg>
                Go Back
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
                    Subscribe
                </button>
                <button class="interaction-button" id="shareBtnVideoModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.52.48 1.2.78 1.96.78 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L7.05 11.23c-.52-.48-1.2-.77-1.96-.77-1.66 0-3 1.34-3 3s1.34 3 3 3c.76 0 1.44-.3 1.96-.77L15.09 15.3c-.05.23-.09.46-.09.7 0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    Share
                </button>
                <button class="interaction-button" id="downloadAppBtnVideoModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                    </svg>
                    Download App
                </button>
                <button class="interaction-button" id="saveVideoBtnVideoModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7V5h10v14zm-3-5l-2-1.5L10 14V7h4v7z"/>
                    </svg>
                    Save Video
                </button>
                <button class="interaction-button" id="reportVideoBtnVideoModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-7z"/>
                    </svg>
                    Report
                </button>
            </div>

            <div class="developer-note-section">
                <h5>From the Developer:</h5>
                <p>Hello! We created this app to empower Aviator players with data-driven insights. Our goal is to provide a tool that enhances your gaming strategy, making the experience more engaging and potentially more rewarding. We're constantly working on improvements based on your feedback. Happy predicting!</p>
            </div>

            <div class="comment-section">
                <h4 style="color: var(--text-color);">Comments</h4>
                <div class="comment-input-group">
                    <input type="text" id="commentInput" placeholder="Add a public comment...">
                    <button id="postCommentBtn">Post</button>
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
                Go Back
            </button>
            <h4 style="text-align: center; margin-bottom: 1.5rem;">Enter Your WhatsApp Number</h4>
            <form id="whatsapp-form">
                <label for="whatsapp_input" class="hidden">WhatsApp Number:</label>
                <input type="text" id="whatsapp_input" name="whatsapp_input" placeholder="e.g., 07XXXXXXXX" required>
                <button type="submit">Proceed to Payment</button>
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
                Go Back
            </button>
            <h2 style="text-align: center; margin-bottom: 1rem; color: var(--primary-color);">Ready to Gain Your Edge?</h2>
            <div class="payment-box">
                <p>Unlock the power of the Pro Aviator Predictor APK for a single, low investment:</p>
                <div class="price">KES 550</div>
                <p>Your journey to smarter predictions begins with a simple M-Pesa transfer. Here's how to secure your copy:</p>
                <div class="payment-details">
                    <p><strong>Step 1: Your M-Pesa Payment</strong></p>
                    <p>Send **KES 550** to the following secure details:</p>
                    <p class="phone-number-display">
                        Phone Number: <strong id="mpesa-number-modal">0720363215</strong> 
                        <button class="copy-btn" onclick="copyMpesaNumberModal()">Copy</button>
                    </p>
                    <p>Recipient Name: <strong>Patrick Wanjala</strong></p>
                    <p style="font-size: 0.95rem; margin-top: 1rem; color: #555;">
                        **Instant Access!** Your payment will be **automatically detected** within moments.
                    </p>
                </div>

                <button id="show-manual-form-btn-modal" class="manual-confirm-btn">
                    Payment not detected? Click here to confirm manually.
                </button>

                <div id="manual-payment-form-container-modal" class="hidden">
                    <form id="payment-form-modal">
                        <p><strong>Step 2: Manual Payment Confirmation</strong></p>
                        <label for="transaction_id_modal">M-Pesa Transaction ID:</label>
                        <input type="text" id="transaction_id_modal" name="transaction_id_modal" placeholder="e.g., QX123AB45C" required>

                        <label for="whatsapp_number_confirm_modal">Your WhatsApp Number:</label>
                        <input type="text" id="whatsapp_number_confirm_modal" name="whatsapp_number_confirm_modal" placeholder="e.g., 07XXXXXXXX" required>

                        <button type="submit">Send My Details</button>
                    </form>
                </div>
            </div>
            
            <div class="mpesa-instructions-section">
                <h2>How to Send Money via M-Pesa (Safaricom)</h2>
                <p>Follow these quick steps on your phone to complete your payment:</p>
                <ol class="mpesa-steps">
                    <li>Go to your **M-Pesa Menu** on your phone.</li>
                    <li>Select **"Send Money"**.</li>
                    <li>Enter the Phone Number: <strong id="mpesa-number-instructions-modal">0720363215</strong></li>
                    <li>Enter the Amount: **KES 550**</li>
                    <li>Confirm the Recipient Name is **Patrick Wanjala**.</li>
                    <li>Enter your M-Pesa PIN and press OK.</li>
                    <li>You will receive an M-Pesa confirmation SMS. Please keep this SMS for your records.</li>
                </ol>
            </div>
        </div>
    </div>

    <!-- Custom Message Box Overlay -->
    <div class="message-box-overlay" id="messageBoxOverlay">
        <div class="message-box-content">
            <p id="messageBoxText"></p>
            <button id="messageBoxCloseBtn">OK</button>
        </div>
    </div>

    <!-- Report Modal Structure -->
    <div class="modal-overlay hidden" id="reportModal">
        <div class="modal-content">
            <button class="modal-close-btn" id="closeReportModalBtn">
                <svg viewBox="0 0 24 24">
                    <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
                </svg>
                Go Back
            </button>
            <h4 style="text-align: center; margin-bottom: 1.5rem;">Report Video</h4>
            <p>This video has never received negative reactions or feedback.</p>
            <p>Do you still want to report it?</p>
            <textarea id="reportReasonInput" placeholder="Optionally, enter your reason for reporting..."></textarea>
            <div class="report-actions">
                <button id="confirmReportBtn">Yes, Report</button>
                <button id="cancelReportBtn">Cancel</button>
            </div>
        </div>
    </div>

    <!-- Advertisement Modal Structure -->
    <div class="advertisement-modal-overlay" id="advertisementModal">
        <div class="advertisement-modal-content">
            <button class="advertisement-close-btn" id="closeAdvertisementModalBtn">&times;</button>
            <p id="advertisementText"></p>
            <button class="advertisement-buy-now-btn" id="advertisementBuyNowBtn">Buy Now!</button>
        </div>
    </div>

    <!-- Exit Intent Modal Structure -->
    <div class="exit-intent-modal-overlay hidden" id="exitIntentModal">
        <div class="exit-intent-modal-content">
            <h4>Don't Leave Yet!</h4>
            <p>Are you sure you want to miss out on maximizing your Aviator wins?</p>
            <p>Get the **Pro Aviator Predictor APK** now and start winning smarter!</p>
            <div class="price">KES 550/= Only!</div>
            <div class="exit-intent-modal-actions">
                <button class="stay-btn" id="stayOnPageBtn">Stay on Page & Buy Now!</button>
                <button class="leave-btn" id="leaveAnywayBtn">No, I want to leave</button>
            </div>
        </div>
    </div>


    <script>
        let player; // Global YouTube player object for the modal
        let currentVideoId = '';
        let currentStartTime = 0;
        let youtubeApiReady = false; // Flag to track YouTube API readiness

        let videoLikes = {
            '9smQbuPXsf8': 1400, // Initial likes for video 1
            'hF4hqebVrx4': 850   // Initial likes for video 2
        };

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
                document.getElementById('modalVideoDescription').innerText = details.description;
                // Now load comments specific to this video
                renderComments(details.comments);
            }

            // ONLY proceed if YouTube API is ready
            if (youtubeApiReady) {
                if (player) {
                    player.loadVideoById(videoId, startTime);
                    player.playVideo(); // Ensure it plays immediately
                    player.unMute(); // Attempt to unmute
                } else {
                    player = new YT.Player('modal-youtube-player', {
                        videoId: videoId,
                        playerVars: {
                            'autoplay': 1,
                            'controls': 0, // Hide controls for cleaner look
                            'showinfo': 0, // Hide video title and uploader info
                            'modestbranding': 1, // Hide YouTube logo
                            'rel': 0, // Do not show related videos
                            'loop': 1, // Loop the video
                            'playlist': videoId, // Required for loop to work
                            'start': startTime,
                            'enablejsapi': 1
                        },
                        events: {
                            'onReady': onPlayerReadyModal,
                            'onStateChange': onPlayerStateChangeModal
                        }
                    });
                }
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
                        this.innerText = 'Subscribe';
                    } else {
                        this.classList.add('subscribed');
                        this.innerText = 'Subscribed';
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
                    showMessageBox(`Video link copied to clipboard: ${videoUrl}`);
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
                    showMessageBox('Unsupported by the browser. This feature is not available.');
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
                        showMessageBox('Please enter a comment before posting.');
                    }
                };
            }
            // --- End of comment section button attachments ---
        }

        // The API will call this function when the modal video player is ready.
        function onPlayerReadyModal(event) {
            event.target.playVideo();
            // Attempt to unmute the video, as some browsers block autoplay with sound
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
            if (player) {
                player.stopVideo(); // Stop video when modal closes
            }
            // Reset interaction buttons
            // These are now handled by re-attaching in openVideoModal, so no explicit reset needed here
            document.getElementById('commentsList').innerHTML = ''; // Clear comments
            document.getElementById('commentInput').value = ''; // Clear input
            checkAndResumeAdTimer(); // Resume ads if no other modals are open
        }

        // Attach click listeners to video previews
        document.querySelectorAll('.video-preview').forEach(preview => {
            preview.addEventListener('click', function() {
                const videoId = this.dataset.videoId;
                const startTime = parseInt(this.dataset.startTime || '0');
                const videoTitle = this.dataset.videoTitle;
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
            showMessageBox('M-Pesa number copied to clipboard: ' + mpesaNumber);
        }

        document.getElementById('payment-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const transactionId = document.getElementById('transaction_id').value;
            const whatsappNumber = document.getElementById('whatsapp_number_main').value;

            showMessageBox(`Thank you! Your payment details have been received.\n\nTransaction ID: ${transactionId}\nWhatsApp Number: ${whatsappNumber}\n\nWe will contact you shortly to send the APK file.`);
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
                whatsappPromptModal.classList.remove('active'); // Close WhatsApp modal
                document.getElementById('paymentModal').classList.add('active'); // Open payment modal
                stopAdTimer(); // Pause ads when payment modal is open
                // Display the confirmation prompt
                showMessageBox("Once payment is confirmed, you will receive an automated message with the APK file and user guide directly to your WhatsApp.");
                whatsappInput.value = ''; // Clear input
            } else {
                showMessageBox("Please enter your WhatsApp number to proceed.");
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
            showMessageBox('M-Pesa number copied to clipboard: ' + mpesaNumber);
        }

        showManualFormBtnModal.addEventListener('click', function() {
            manualPaymentFormContainerModal.classList.remove('hidden');
            this.style.display = 'none';
        });

        paymentFormModal.addEventListener('submit', function(event) {
            event.preventDefault();

            const transactionId = document.getElementById('transaction_id_modal').value;
            const whatsappNumber = document.getElementById('whatsapp_number_confirm_modal').value;

            showMessageBox(`Thank you! Your payment details have been received.\n\nTransaction ID: ${transactionId}\nWhatsApp Number: ${whatsappNumber}\n\nWe will contact you shortly to send the APK file.`);
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
            showMessageBox(`Your report is received and it is awaiting feedback. ${reportReason ? 'Reason provided: "' + reportReason + '"' : ''}`);
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
                        <button class="comment-action-button comment-reply-btn" data-comment-index="${index}">Reply</button>
                        <span class="comment-reply-count">${comment.replies.length > 0 ? comment.replies.length + ' replies' : ''}</span>
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
                <input type="text" placeholder="Write a reply...">
                <button>Post Reply</button>
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
                    showMessageBox('Please enter your reply.');
                }
            });
        }

        // --- Comment Generation Logic ---
        const commentAdjectives = [
            'amazing', 'fantastic', 'game-changing', 'incredible', 'superb', 'awesome', 'mind-blowing', 'revolutionary', 'brilliant', 'powerful',
            'noma sana', 'kali', 'poa', 'fiti', 'smart', 'supa', 'mzuri', 'chap chap', 'safi', 'mambo yote',
            'ndio hiyo', 'imefika', 'imebamba', 'imechangamka', 'imeenda'
        ];
        const commentNouns = [
            'app', 'predictor', 'tool', 'software', 'system', 'guide', 'strategy',
            'kitu', 'programu', 'njia', 'mbinu', 'dawa', 'formula', 'siri',
            'chapaa', 'ganji', 'dooh', 'njaro', 'mboka'
        ];
        const commentVerbs = [
            'improved', 'boosted', 'changed', 'enhanced', 'transformed', 'optimized', 'elevated',
            'imeboresha', 'imeongeza', 'imebadilisha', 'imenyanyua', 'imefanya', 'imepiga', 'imeleta',
            'imebonga', 'imehepa', 'imekatia', 'imechapia'
        ];
        const commentPhrases = [
            'My win rate has {verb} significantly!',
            'This {noun} is {adjective}!',
            'I was skeptical, but this really works.',
            'Highly recommend this {noun}.',
            'Can\'t believe how much my game {verb}!',
            'This video is so {adjective}!',
            'Thanks for the {noun}!',
            'Finally found a {noun} that delivers.',
            'Worth every penny!',
            'My results are {adjective} after using this.',
            'A must-have for any Aviator player.',
            'The predictions are spot on.',
            'This {noun} is a true game-changer.',
            'So glad I found this!',
            'It\'s made a huge difference.',
            'Simple to use and very effective.',
            'I\'m consistently winning more now.',
            'This is the future of Aviator betting.',
            'Unbelievable accuracy!',
            'My friends are asking for my secret!',
            // Kiswahili phrases
            'Hii {noun} ni {adjective} sana! Nimepiga jackpot mara kadhaa. 🔥',
            'Kweli kabisa, inasaidia sana kujua next move. Asante!',
            'Niliwacha Aviator, but hii {noun} imenirudisha. Worth it!',
            'Hii tutorial {verb} sana kuelewa. Big up!',
            'Nimejaribu na imefanya kazi! Asante sana kwa hii {noun}.',
            'Predictions ziko accurate, nimefurahi sana.',
            'Safi sana! Hii {noun} ni kiboko.',
            'Lazima uwe nayo hii {noun}.',
            'Imenisaidia sana kushinda zaidi.',
            'Mambo yote na hii {noun}.',
            // Sheng phrases
            'Hii kitu ni {adjective}! Nimebamba sana.',
            'Wasee mmesema kweli, hii kitu inalipa. Cheza smart na hii {noun}!',
            'Hii ganji yangu {verb} na hii {noun}.',
            'Kitu safi, nimechapia mboka na hii {noun}.',
            'Form ni {adjective} na hii {noun}.',
            'Mimi hupiga raundi na hii {noun} pekee.',
            'Hii {noun} imeniokoa, nimehepa losses.',
            'Maboys wangu wote wanatumia hii {noun}.',
            'Hii ni ile kitu, no cap.',
            'Nimekuwa nikitafuta hii {noun} kitambo, finally!'
        ];

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
            
            let text = getRandomElement(commentPhrases);
            text = text.replace('{adjective}', getRandomElement(commentAdjectives));
            text = text.replace('{noun}', getRandomElement(commentNouns));
            text = text.replace('{verb}', getRandomElement(commentVerbs));

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
                title: "Aviator Predictor for Beginners – 2025 Tutorial",
                description: "Dive deep into the mechanics of the Pro Aviator Predictor APK with this comprehensive 2025 tutorial. Learn how to interpret signals, apply strategies, and make data-driven decisions to enhance your Aviator game. This video covers everything from basic setup to advanced usage tips, designed to give you a significant edge.",
                views: 33456,
                comments: [] // Will be populated dynamically
            },
            'hF4hqebVrx4': {
                title: "Another Aviator Predictor Live Demonstration",
                description: "Experience the Aviator Predictor in a live, unedited demonstration. This video showcases the app's predictive capabilities during real-time gameplay, highlighting its accuracy and responsiveness. See how it can help you anticipate game outcomes and optimize your betting strategy for better results.",
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
        const advertisementMessages = [
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
        ];

        const advertisementModal = document.getElementById('advertisementModal');
        const advertisementText = document.getElementById('advertisementText');
        const closeAdvertisementModalBtn = document.getElementById('closeAdvertisementModalBtn');
        const advertisementBuyNowBtn = document.getElementById('advertisementBuyNowBtn');

        function showAdvertisement() {
            if (isAnyModalOpen()) {
                // If any other modal is open, don't show ad and reschedule
                return;
            }
            const randomMessage = getRandomElement(advertisementMessages);
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

    </script>

</body>
</html>
