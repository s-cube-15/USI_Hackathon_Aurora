FROM python:3.11.8

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN pip install -r requirements.txt

CMD["python", "main.py"]