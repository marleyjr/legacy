import gettext

gettext.bindtextdomain('messages', '/var/www/worldofhackers.eu/locale')
gettext.textdomain('messages')

t = gettext.translation('pt', '/var/www/worldofhackers.eu/locale', fallback=True)

_ = t.gettext
# # ...
print('Missing fields.')



print(('Task Managerr'))