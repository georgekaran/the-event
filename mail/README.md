### Instruções
Criei uma única rota POST, onde eu espero receber o TYPE, que seria um desses quatros:
```javascript
SUBSCRIPTION
UNSUBSCRIPTION
ATTENDANCE
CERTIFICATE_ISSUE
```

Com base neles eu retorno o template de email que está na pasta util/mail.