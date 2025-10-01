// Simple logger utility for database operations and general logging
const fs = require('fs');
const path = require('path');

class Logger {
  constructor() {
    this.logDir = path.join(__dirname, '../logs');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  getCurrentTimestamp() {
    return new Date().toISOString();
  }

  // Log database operations with performance metrics
  logDbOperation(operation, collection, query = {}, metadata = {}) {
    const logEntry = {
      timestamp: this.getCurrentTimestamp(),
      type: 'DB_OPERATION',
      operation,
      collection,
      query: JSON.stringify(query),
      executionTime: metadata.executionTime || 0,
      ...metadata
    };

    // Log to console in development
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[DB] ${operation.toUpperCase()} on ${collection} - ${metadata.executionTime || 0}ms`);
    }

    // Write to log file
    this.writeToFile('db-operations.log', logEntry);
  }

  // General info logging
  info(message, metadata = {}) {
    const logEntry = {
      timestamp: this.getCurrentTimestamp(),
      level: 'INFO',
      message,
      ...metadata
    };

    console.log(`[INFO] ${message}`);
    this.writeToFile('app.log', logEntry);
  }

  // Error logging
  error(message, error = null, metadata = {}) {
    const logEntry = {
      timestamp: this.getCurrentTimestamp(),
      level: 'ERROR',
      message,
      error: error ? {
        message: error.message,
        stack: error.stack,
        name: error.name
      } : null,
      ...metadata
    };

    console.error(`[ERROR] ${message}`, error);
    this.writeToFile('error.log', logEntry);
  }

  // Warning logging
  warn(message, metadata = {}) {
    const logEntry = {
      timestamp: this.getCurrentTimestamp(),
      level: 'WARN',
      message,
      ...metadata
    };

    console.warn(`[WARN] ${message}`);
    this.writeToFile('app.log', logEntry);
  }

  // Write log entry to file
  writeToFile(filename, logEntry) {
    try {
      const logPath = path.join(this.logDir, filename);
      const logLine = JSON.stringify(logEntry) + '\n';
      
      fs.appendFileSync(logPath, logLine);
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
  }

  // Clean old log files (optional utility method)
  cleanOldLogs(daysToKeep = 30) {
    try {
      const files = fs.readdirSync(this.logDir);
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - daysToKeep);

      files.forEach(file => {
        const filePath = path.join(this.logDir, file);
        const stats = fs.statSync(filePath);
        
        if (stats.mtime < cutoffDate) {
          fs.unlinkSync(filePath);
          console.log(`Cleaned old log file: ${file}`);
        }
      });
    } catch (error) {
      console.error('Failed to clean old logs:', error);
    }
  }
}

// Export singleton instance
module.exports = new Logger();