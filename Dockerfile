# Python image 3.12
FROM python:3.12-slim

# Creating direcotry in container
WORKDIR /app

# coppy and install 
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copy rest of the app
COPY . .

EXPOSE 8000

#Starting app gunicorn
CMD [ "gunicorn", "--bind=0.0.0.0:8000", "app:app" ]