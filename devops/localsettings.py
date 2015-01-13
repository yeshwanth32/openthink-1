admin_username = 'admin'
admin_password = 'admin_password'
admin_email = 'admin@openthink.org'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'commcare',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': 'localhost',
        'PORT': '5432'
    }
}

DB_CONNECTION_STRING = 'postgresql://postgres:postgres@localhost/thinkdb'