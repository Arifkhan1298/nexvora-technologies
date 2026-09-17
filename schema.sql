-- ============================================================================
-- NEXVORA TECHNOLOGIES — Enterprise Relational Database Schema (MySQL / MariaDB)
-- High Performance, UTF8mb4 Indexed, Enterprise Ready
-- ============================================================================

CREATE DATABASE IF NOT EXISTS `nexvora_db` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `nexvora_db`;

-- 1. Leads & CRM Pipeline Table
CREATE TABLE IF NOT EXISTS `leads` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `lead_code` VARCHAR(32) NOT NULL UNIQUE,
  `full_name` VARCHAR(150) NOT NULL,
  `company` VARCHAR(150) DEFAULT 'Direct / Unspecified',
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `service` VARCHAR(100) NOT NULL,
  `budget` VARCHAR(50) DEFAULT '$5,000 - $15,000',
  `status` ENUM('New', 'Contacted', 'Proposal', 'Negotiation', 'Won', 'Lost') DEFAULT 'New',
  `notes` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_lead_status` (`status`),
  INDEX `idx_lead_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Interactive Quote & Project Scope Estimations Table
CREATE TABLE IF NOT EXISTS `quote_requests` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `quote_code` VARCHAR(32) NOT NULL UNIQUE,
  `full_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `platform` VARCHAR(80) NOT NULL,
  `design_tier` VARCHAR(80) DEFAULT 'Custom UI/UX',
  `features` TEXT DEFAULT NULL,
  `urgency` VARCHAR(50) DEFAULT 'Standard Delivery',
  `estimated_price` VARCHAR(50) NOT NULL,
  `estimated_timeline` VARCHAR(80) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `status` ENUM('Pending Review', 'Consultation Scheduled', 'Contract Sent', 'Archived') DEFAULT 'Pending Review',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX `idx_quote_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Contact & Direct Inquiries Table
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `full_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) DEFAULT NULL,
  `service` VARCHAR(100) DEFAULT 'General Inquiries',
  `message` TEXT NOT NULL,
  `status` ENUM('Unread', 'Replied', 'Archived') DEFAULT 'Unread',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Careers & Job Applications Table
CREATE TABLE IF NOT EXISTS `job_applications` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `app_code` VARCHAR(32) NOT NULL UNIQUE,
  `full_name` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `position` VARCHAR(120) NOT NULL,
  `experience` VARCHAR(50) DEFAULT '3-5 Years',
  `portfolio_url` VARCHAR(255) DEFAULT NULL,
  `resume_path` VARCHAR(255) DEFAULT NULL,
  `cover_note` TEXT DEFAULT NULL,
  `status` ENUM('Review Pending', 'Shortlisted', 'Interview Scheduled', 'Rejected', 'Hired') DEFAULT 'Review Pending',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Projects & Case Studies Table
CREATE TABLE IF NOT EXISTS `projects` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `slug` VARCHAR(100) NOT NULL UNIQUE,
  `title` VARCHAR(200) NOT NULL,
  `category` ENUM('Web', 'Mobile', 'SaaS', 'Business Systems', 'E-Commerce') NOT NULL,
  `client_name` VARCHAR(150) NOT NULL,
  `summary` TEXT NOT NULL,
  `technologies` VARCHAR(255) NOT NULL,
  `completion_year` INT DEFAULT 2026,
  `status` ENUM('Completed', 'In Progress', 'Maintenance') DEFAULT 'Completed'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Support Tickets Table
CREATE TABLE IF NOT EXISTS `support_tickets` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ticket_code` VARCHAR(32) NOT NULL UNIQUE,
  `client_name` VARCHAR(150) NOT NULL,
  `client_email` VARCHAR(150) NOT NULL,
  `subject` VARCHAR(200) NOT NULL,
  `priority` ENUM('Low', 'Normal', 'High', 'Critical') DEFAULT 'Normal',
  `description` TEXT NOT NULL,
  `status` ENUM('Open', 'In Investigation', 'Resolved', 'Closed') DEFAULT 'Open',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS `newsletter_subscribers` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `subscribed_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed Sample Data for Instant Production Demo Testing
INSERT IGNORE INTO `leads` (`lead_code`, `full_name`, `company`, `email`, `service`, `budget`, `status`, `notes`) VALUES
('LEAD-1081', 'Alexander Wright', 'Apex BioTech Corp', 'alex@apexbio.io', 'SaaS Platform', '$28,000', 'Proposal', 'HIPAA compliant cloud analytics portal.'),
('LEAD-1082', 'Elena Rostova', 'Nordic FinTech Ltd', 'elena@nordicpay.se', 'Mobile App', '$42,000', 'Negotiation', 'Cross-platform Flutter banking app with biometric auth.'),
('LEAD-1083', 'Marcus Chen', 'HyperLogistics Global', 'marcus@hyperlog.com', 'Custom BMS', '$35,000', 'Won', 'Fleet tracking & automated warehouse inventory.'),
('LEAD-1084', 'Sarah Jenkins', 'Aura Real Estate', 'sarah@auraproperties.com', 'Web Development', '$12,500', 'Contacted', 'Interactive 3D virtual tour listings engine.'),
('LEAD-1085', 'David Miller', 'Nova Retail Tech', 'david@novamarket.co', 'E-Commerce SaaS', '$18,000', 'New', 'Headless Shopify architecture with Next.js frontend.');

INSERT IGNORE INTO `projects` (`slug`, `title`, `category`, `client_name`, `summary`, `technologies`, `completion_year`) VALUES
('fintech-core-gateway', 'FinTech Core Gateway & Microservices', 'SaaS', 'Nordic FinTech Ltd', 'Real-time financial transaction processor executing 15,000 tx/sec with 99.999% SLA.', 'Go, Node.js, Redis, Docker, PostgreSQL', 2026),
('hyperlog-erp-system', 'HyperLogistics ERP & Fleet Management', 'Business Systems', 'HyperLogistics Global', 'Cloud-native warehouse dispatch and IoT fleet telemetry system managing 2,400+ vehicles.', 'Python, React, Fastify, MySQL, MQTT', 2026),
('aura-mobile-app', 'Aura Health Mobile Diagnostic Suite', 'Mobile', 'Apex BioTech Corp', 'Secure telemedicine mobile app connecting patients to diagnostics labs with end-to-end encryption.', 'Flutter, Kotlin, WebRTC, Firebase', 2025),
('omni-retail-cloud', 'OmniCommerce Multi-tenant Storefront', 'E-Commerce', 'Nova Retail Tech', 'High-throughput headless e-commerce engine with sub-50ms product catalog lookups.', 'TypeScript, Next.js, Stripe, GraphQL', 2025);
