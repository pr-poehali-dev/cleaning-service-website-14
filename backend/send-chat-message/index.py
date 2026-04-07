import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправляет сообщение из онлайн-чата на почту владельца."""
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    message = body.get("message", "").strip()

    if not message:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Сообщение не может быть пустым"}, ensure_ascii=False),
        }

    smtp_host = "smtp.mail.ru"
    smtp_port = 465
    sender = "zhizhin2006@list.ru"
    recipient = "zhizhin2006@list.ru"
    password = os.environ["SMTP_PASSWORD"]

    msg = MIMEMultipart("alternative")
    msg["Subject"] = "Новое сообщение из онлайн-чата — ЧистоДом"
    msg["From"] = sender
    msg["To"] = recipient

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 500px;">
        <h2 style="color: #0284c7;">Новое сообщение из чата</h2>
        <div style="background: #f0f9ff; border-left: 4px solid #0284c7; padding: 16px; border-radius: 4px; margin: 16px 0;">
            <p style="margin: 0; color: #1e293b; font-size: 15px;">{message}</p>
        </div>
        <p style="color: #64748b; font-size: 13px;">Сайт ЧистоДом — онлайн-консультация</p>
    </div>
    """

    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(sender, password)
        server.sendmail(sender, recipient, msg.as_string())

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"success": True}),
    }