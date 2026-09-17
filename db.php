<?php
/**
 * NEXVORA TECHNOLOGIES — High Performance Database Handler (PDO)
 * Enterprise Grade, UTF8mb4 Encoded, Prepared Statements Only
 */

class Database {
    private static $instance = null;
    private $pdo;

    private $host = '127.0.0.1';
    private $db   = 'nexvora_db';
    private $user = 'root';
    private $pass = '';
    private $charset = 'utf8mb4';

    private function __construct() {
        // Read environment variables if set in production server
        $this->host = getenv('DB_HOST') ?: $this->host;
        $this->db   = getenv('DB_NAME') ?: $this->db;
        $this->user = getenv('DB_USER') ?: $this->user;
        $this->pass = getenv('DB_PASS') ?: $this->pass;

        $dsn = "mysql:host={$this->host};dbname={$this->db};charset={$this->charset}";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES {$this->charset}"
        ];

        try {
            $this->pdo = new PDO($dsn, $this->user, $this->pass, $options);
        } catch (\PDOException $e) {
            // Return null or log without exposing credentials
            error_log("NEXVORA Database Connection Failed: " . $e->getMessage());
            $this->pdo = null;
        }
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection() {
        return $this->pdo;
    }

    public function isConnected() {
        return $this->pdo !== null;
    }
}
