from django.apps import AppConfig
import logging

logger = logging.getLogger('mylogger')


class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'accounts'
    logging.info('WHAT THE FUCK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

    def ready(self):
        logging.info('AT THE READY')
        import accounts.signals
