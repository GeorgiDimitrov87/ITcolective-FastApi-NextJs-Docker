FROM python:3.12-bookworm

# Set the working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Copy only the necessary files for dependency installation
COPY README.md pyproject.toml ./

# Create and activate virtual environment
RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:${PATH}"

# Install Python dependencies using pip
RUN pip install --upgrade pip && \
    pip install -e .

# Copy the rest of the application
COPY . .

# Set permissions for the start script
RUN chmod +x start.sh && \
    sed -i 's/\r$//' start.sh

EXPOSE 8000

# Start the application
CMD ["sh", "-c", "cd /app && ./start.sh"]