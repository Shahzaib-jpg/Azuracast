<?php return array (
  0 => 
  array (
    'GET' => 
    array (
      '/admin' => 'route0',
      '/admin/debug' => 'route1',
      '/admin/debug/clear-cache' => 'route2',
      '/admin/debug/clear-queue' => 'route3',
      '/admin/install/shoutcast' => 'route9',
      '/admin/install/geolite' => 'route10',
      '/admin/auditlog' => 'route11',
      '/admin/api-keys' => 'route12',
      '/admin/backups' => 'route13',
      '/admin/branding' => 'route14',
      '/admin/custom_fields' => 'route15',
      '/admin/logs' => 'route16',
      '/admin/permissions' => 'route18',
      '/admin/relays' => 'route19',
      '/admin/settings' => 'route20',
      '/admin/stations' => 'route21',
      '/admin/storage_locations' => 'route22',
      '/admin/users' => 'route23',
      '/' => 'route24',
      '/dashboard' => 'route25',
      '/logout' => 'route26',
      '/endsession' => 'route28',
      '/api_keys' => 'route29',
      '/profile' => 'route30',
      '/profile/theme' => 'route31',
      '/login' => 'route32',
      '/login/2fa' => 'route33',
      '/forgot' => 'route34',
      '/setup' => 'route36',
      '/setup/complete' => 'route37',
      '/setup/register' => 'route38',
      '/setup/station' => 'route39',
      '/setup/settings' => 'route40',
      '/public/sw.js' => 'route41',
      '/api' => 'route79',
      '/api/openapi.yml' => 'route80',
      '/api/status' => 'route81',
      '/api/time' => 'route82',
      '/api/internal/relays' => 'route89',
      '/api/nowplaying' => 'route91',
      '/api/stations' => 'route92',
      '/api/admin/api-keys' => 'route93',
      '/api/admin/auditlog' => 'route96',
      '/api/admin/backups' => 'route97',
      '/api/admin/server/stats' => 'route102',
      '/api/admin/permissions' => 'route103',
      '/api/admin/relays' => 'route104',
      '/api/admin/settings' => 'route105',
      '/api/admin/geolite' => 'route111',
      '/api/admin/shoutcast' => 'route113',
      '/api/admin/custom_fields' => 'route115',
      '/api/admin/roles' => 'route120',
      '/api/admin/stations' => 'route125',
      '/api/admin/users' => 'route130',
      '/api/admin/storage_locations' => 'route135',
      '/api/admin/stations/storage-locations' => 'route141',
      '/api/frontend/account/me' => 'route142',
      '/api/frontend/account/two-factor' => 'route145',
      '/api/frontend/account/api-keys' => 'route148',
      '/api/frontend/dashboard/charts' => 'route152',
      '/api/frontend/dashboard/notifications' => 'route153',
      '/api/frontend/dashboard/stations' => 'route154',
    ),
    'POST' => 
    array (
      '/admin/settings' => 'route20',
      '/login' => 'route32',
      '/login/2fa' => 'route33',
      '/forgot' => 'route34',
      '/setup' => 'route36',
      '/setup/complete' => 'route37',
      '/setup/register' => 'route38',
      '/setup/station' => 'route39',
      '/setup/settings' => 'route40',
      '/api/internal/relays' => 'route90',
      '/api/admin/backups/run' => 'route98',
      '/api/admin/relays' => 'route104',
      '/api/admin/send-test-message' => 'route107',
      '/api/admin/geolite' => 'route112',
      '/api/admin/shoutcast' => 'route114',
      '/api/admin/custom_fields' => 'route116',
      '/api/admin/roles' => 'route121',
      '/api/admin/stations' => 'route126',
      '/api/admin/users' => 'route131',
      '/api/admin/storage_locations' => 'route136',
      '/api/frontend/account/api-keys' => 'route149',
    ),
    'PUT' => 
    array (
      '/api/admin/settings' => 'route106',
      '/api/frontend/account/me' => 'route143',
      '/api/frontend/account/password' => 'route144',
      '/api/frontend/account/two-factor' => 'route146',
    ),
    'DELETE' => 
    array (
      '/api/frontend/account/two-factor' => 'route147',
    ),
  ),
  1 => 
  array (
    'GET' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/admin/debug/clear\\-queue/([^/]+)|/admin/debug/sync/([^/]+)()|/admin/debug/log/([^/]+)()()|/admin/debug/station/([^/]+)/nowplaying()()()|/admin/debug/station/([^/]+)/nextsong()()()()|/admin/logs/view/([^/]+)/([^/]+)()()()()|/login\\-as/([^/]+)/([^/]+)()()()()()|/recover/([^/]+)()()()()()()()|/public/([^/]+)()()()()()()()()|/public/([^/]+)/(embed|social)()()()()()()()()|/public/([^/]+)/app\\.webmanifest()()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route3',
            1 => 
            array (
              'queue' => 'queue',
            ),
          ),
          3 => 
          array (
            0 => 'route4',
            1 => 
            array (
              'task' => 'task',
            ),
          ),
          4 => 
          array (
            0 => 'route5',
            1 => 
            array (
              'path' => 'path',
            ),
          ),
          5 => 
          array (
            0 => 'route6',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          6 => 
          array (
            0 => 'route7',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route17',
            1 => 
            array (
              'station_id' => 'station_id',
              'log' => 'log',
            ),
          ),
          8 => 
          array (
            0 => 'route27',
            1 => 
            array (
              'id' => 'id',
              'csrf' => 'csrf',
            ),
          ),
          9 => 
          array (
            0 => 'route35',
            1 => 
            array (
              'token' => 'token',
            ),
          ),
          10 => 
          array (
            0 => 'route42',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route42',
            1 => 
            array (
              'station_id' => 'station_id',
              'embed' => 'embed',
            ),
          ),
          12 => 
          array (
            0 => 'route43',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
      1 => 
      array (
        'regex' => '~^(?|/public/([^/]+)/embed\\-requests|/public/([^/]+)/playlist()|/public/([^/]+)/playlist\\.([^/]+)()|/public/([^/]+)/history()()()|/public/([^/]+)/dj()()()()|/public/([^/]+)/ondemand()()()()()|/public/([^/]+)/ondemand/(embed)()()()()()|/public/([^/]+)/schedule()()()()()()()|/public/([^/]+)/schedule/(embed)()()()()()()()|/public/([^/]+)/podcasts()()()()()()()()()|/public/([^/]+)/podcast/([^/]+)/episodes()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route44',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route45',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          4 => 
          array (
            0 => 'route45',
            1 => 
            array (
              'station_id' => 'station_id',
              'format' => 'format',
            ),
          ),
          5 => 
          array (
            0 => 'route46',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          6 => 
          array (
            0 => 'route47',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route48',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          8 => 
          array (
            0 => 'route48',
            1 => 
            array (
              'station_id' => 'station_id',
              'embed' => 'embed',
            ),
          ),
          9 => 
          array (
            0 => 'route49',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          10 => 
          array (
            0 => 'route49',
            1 => 
            array (
              'station_id' => 'station_id',
              'embed' => 'embed',
            ),
          ),
          11 => 
          array (
            0 => 'route50',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route51',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
        ),
      ),
      2 => 
      array (
        'regex' => '~^(?|/public/([^/]+)/podcast/([^/]+)/episode/([^/]+)|/public/([^/]+)/podcast/([^/]+)/feed()()|/station/([^/]+)()()()()|/station/([^/]+)/automation()()()()()|/station/([^/]+)/fallback()()()()()()|/station/([^/]+)/files()()()()()()()|/station/([^/]+)/ls_config()()()()()()()()|/station/([^/]+)/logs()()()()()()()()()|/station/([^/]+)/logs/view/([^/]+)()()()()()()()()()|/station/([^/]+)/playlists()()()()()()()()()()()|/station/([^/]+)/podcasts()()()()()()()()()()()())$~',
        'routeMap' => 
        array (
          4 => 
          array (
            0 => 'route52',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          5 => 
          array (
            0 => 'route53',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
          6 => 
          array (
            0 => 'route54',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route55',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          8 => 
          array (
            0 => 'route56',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route57',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          10 => 
          array (
            0 => 'route58',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route59',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route60',
            1 => 
            array (
              'station_id' => 'station_id',
              'log' => 'log',
            ),
          ),
          13 => 
          array (
            0 => 'route61',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          14 => 
          array (
            0 => 'route62',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
      3 => 
      array (
        'regex' => '~^(?|/station/([^/]+)/mounts|/station/([^/]+)/profile()|/station/([^/]+)/profile/toggle/([^/]+)/([^/]+)|/station/([^/]+)/profile/edit()()()|/station/([^/]+)/queue()()()()|/station/([^/]+)/remotes()()()()()|/station/([^/]+)/reports/overview()()()()()()|/station/([^/]+)/reports/timeline()()()()()()()|/station/([^/]+)/reports/performance()()()()()()()()|/station/([^/]+)/reports/listeners()()()()()()()()()|/station/([^/]+)/reports/soundexchange()()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route63',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route64',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          4 => 
          array (
            0 => 'route65',
            1 => 
            array (
              'station_id' => 'station_id',
              'feature' => 'feature',
              'csrf' => 'csrf',
            ),
          ),
          5 => 
          array (
            0 => 'route66',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          6 => 
          array (
            0 => 'route67',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route68',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          8 => 
          array (
            0 => 'route69',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route70',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          10 => 
          array (
            0 => 'route71',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route72',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route73',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
      4 => 
      array (
        'regex' => '~^(?|/station/([^/]+)/reports/requests|/station/([^/]+)/sftp_users()|/station/([^/]+)/streamers()()|/station/([^/]+)/webhooks()()()|/api/internal/([^/]+)/auth()()()()|/api/internal/([^/]+)/nextsong()()()()()|/api/internal/([^/]+)/djon()()()()()()|/api/internal/([^/]+)/djoff()()()()()()()|/api/internal/([^/]+)/feedback()()()()()()()()|/api/internal/([^/]+)/listener\\-auth()()()()()()()()()|/api/nowplaying/([^/]+)()()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route74',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route75',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          4 => 
          array (
            0 => 'route76',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          5 => 
          array (
            0 => 'route77',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          6 => 
          array (
            0 => 'route83',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route84',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          8 => 
          array (
            0 => 'route85',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route86',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          10 => 
          array (
            0 => 'route87',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route88',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route91',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
      5 => 
      array (
        'regex' => '~^(?|/api/admin/api\\-key/([^/]+)|/api/admin/backups/log/([^/]+)()|/api/admin/backups/download/([^/]+)()()|/api/admin/settings/([^/]+)()()()|/api/admin/custom_assets/([^/]+)()()()()|/api/admin/custom_field/([^/]+)()()()()()|/api/admin/role/([^/]+)()()()()()()|/api/admin/station/([^/]+)()()()()()()()|/api/admin/user/([^/]+)()()()()()()()()|/api/admin/storage_location/([^/]+)()()()()()()()()()|/api/frontend/account/api\\-key/([^/]+)()()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route94',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          3 => 
          array (
            0 => 'route99',
            1 => 
            array (
              'path' => 'path',
            ),
          ),
          4 => 
          array (
            0 => 'route100',
            1 => 
            array (
              'path' => 'path',
            ),
          ),
          5 => 
          array (
            0 => 'route105',
            1 => 
            array (
              'group' => 'group',
            ),
          ),
          6 => 
          array (
            0 => 'route108',
            1 => 
            array (
              'type' => 'type',
            ),
          ),
          7 => 
          array (
            0 => 'route117',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          8 => 
          array (
            0 => 'route122',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          9 => 
          array (
            0 => 'route127',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          10 => 
          array (
            0 => 'route132',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          11 => 
          array (
            0 => 'route137',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          12 => 
          array (
            0 => 'route150',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
        ),
      ),
      6 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)|/api/station/([^/]+)/automation/settings()|/api/station/([^/]+)/nowplaying()()|/api/station/([^/]+)/nowplaying/update()()()|/api/station/([^/]+)/profile()()()()|/api/station/([^/]+)/profile/edit()()()()()|/api/station/([^/]+)/quota()()()()()()|/api/station/([^/]+)/quota/([^/]+)()()()()()()|/api/station/([^/]+)/schedule()()()()()()()()|/api/station/([^/]+)/history()()()()()()()()()|/api/station/([^/]+)/queue()()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route155',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route156',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          4 => 
          array (
            0 => 'route159',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          5 => 
          array (
            0 => 'route160',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          6 => 
          array (
            0 => 'route161',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route162',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          8 => 
          array (
            0 => 'route164',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route164',
            1 => 
            array (
              'station_id' => 'station_id',
              'type' => 'type',
            ),
          ),
          10 => 
          array (
            0 => 'route165',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route166',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route167',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
      7 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/requests|/api/station/([^/]+)/request/([^/]+)|/api/station/([^/]+)/ondemand()()|/api/station/([^/]+)/ondemand/download/([^/]+)()()|/api/station/([^/]+)/listeners()()()()|/api/station/([^/]+)/waveform/([a-zA-Z0-9\\-]+)\\.json()()()()|/api/station/([^/]+)/art/([a-zA-Z0-9\\-]+)\\.jpg()()()()()|/api/station/([^/]+)/art/([a-zA-Z0-9\\-]+)()()()()()()|/api/station/([^/]+)/liquidsoap\\-config()()()()()()()()|/api/station/([^/]+)/podcast/([^/]+)()()()()()()()()|/api/station/([^/]+)/podcast/([^/]+)/art()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route170',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route171',
            1 => 
            array (
              'station_id' => 'station_id',
              'media_id' => 'media_id',
            ),
          ),
          4 => 
          array (
            0 => 'route172',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          5 => 
          array (
            0 => 'route173',
            1 => 
            array (
              'station_id' => 'station_id',
              'media_id' => 'media_id',
            ),
          ),
          6 => 
          array (
            0 => 'route174',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route175',
            1 => 
            array (
              'station_id' => 'station_id',
              'media_id' => 'media_id',
            ),
          ),
          8 => 
          array (
            0 => 'route176',
            1 => 
            array (
              'station_id' => 'station_id',
              'media_id' => 'media_id',
            ),
          ),
          9 => 
          array (
            0 => 'route177',
            1 => 
            array (
              'station_id' => 'station_id',
              'media_id' => 'media_id',
            ),
          ),
          10 => 
          array (
            0 => 'route180',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route182',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
          12 => 
          array (
            0 => 'route183',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
        ),
      ),
      8 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/podcast/([^/]+)/episodes|/api/station/([^/]+)/podcast/([^/]+)/episode/([^/]+)|/api/station/([^/]+)/podcast/([^/]+)/episode/([^/]+)/art()|/api/station/([^/]+)/podcast/([^/]+)/episode/([^/]+)/download()()|/api/station/([^/]+)/podcasts()()()()()|/api/station/([^/]+)/files()()()()()()|/api/station/([^/]+)/file/([^/]+)()()()()()()|/api/station/([^/]+)/mounts()()()()()()()()|/api/station/([^/]+)/mount/([^/]+)()()()()()()()()|/api/station/([^/]+)/playlists()()()()()()()()()()|/api/station/([^/]+)/playlist/([^/]+)()()()()()()()()()())$~',
        'routeMap' => 
        array (
          3 => 
          array (
            0 => 'route184',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
          4 => 
          array (
            0 => 'route185',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          5 => 
          array (
            0 => 'route186',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          6 => 
          array (
            0 => 'route187',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          7 => 
          array (
            0 => 'route188',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          8 => 
          array (
            0 => 'route204',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route206',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          10 => 
          array (
            0 => 'route209',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route211',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          12 => 
          array (
            0 => 'route214',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          13 => 
          array (
            0 => 'route216',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
        ),
      ),
      9 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/remotes|/api/station/([^/]+)/remote/([^/]+)|/api/station/([^/]+)/sftp\\-users()()|/api/station/([^/]+)/sftp\\-user/([^/]+)()()|/api/station/([^/]+)/streamers()()()()|/api/station/([^/]+)/streamer/([^/]+)()()()()|/api/station/([^/]+)/webhooks()()()()()()|/api/station/([^/]+)/webhook/([^/]+)()()()()()()|/api/station/([^/]+)/files/list()()()()()()()()|/api/station/([^/]+)/files/directories()()()()()()()()()|/api/station/([^/]+)/files/play/([^/]+)()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route219',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route221',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          4 => 
          array (
            0 => 'route224',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          5 => 
          array (
            0 => 'route226',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          6 => 
          array (
            0 => 'route229',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route231',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          8 => 
          array (
            0 => 'route234',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route236',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          10 => 
          array (
            0 => 'route239',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route240',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route244',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
        ),
      ),
      10 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/files/download|/api/station/([^/]+)/files/upload()|/api/station/([^/]+)/mount/([^/]+)/intro()|/api/station/([^/]+)/playlists/schedule()()()|/api/station/([^/]+)/playlist/([^/]+)/order()()()|/api/station/([^/]+)/playlist/([^/]+)/queue()()()()|/api/station/([^/]+)/playlist/([^/]+)/export()()()()()|/api/station/([^/]+)/playlist/([^/]+)/export/([^/]+)()()()()()|/api/station/([^/]+)/reports/requests()()()()()()()()|/api/station/([^/]+)/reports/performance()()()()()()()()()|/api/station/([^/]+)/reports/overview/charts()()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route245',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route246',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          4 => 
          array (
            0 => 'route248',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          5 => 
          array (
            0 => 'route251',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          6 => 
          array (
            0 => 'route254',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          7 => 
          array (
            0 => 'route256',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          8 => 
          array (
            0 => 'route260',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          9 => 
          array (
            0 => 'route260',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
              'format' => 'format',
            ),
          ),
          10 => 
          array (
            0 => 'route261',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route264',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route265',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
      11 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/reports/overview/best\\-and\\-worst|/api/station/([^/]+)/reports/overview/most\\-played()|/api/station/([^/]+)/reports/soundexchange()()|/api/station/([^/]+)/streamers/schedule()()()|/api/station/([^/]+)/streamers/broadcasts()()()()|/api/station/([^/]+)/streamer/([^/]+)/broadcasts()()()()|/api/station/([^/]+)/streamer/([^/]+)/broadcast/([^/]+)/download()()()()|/api/station/([^/]+)/restart\\-status()()()()()()()|/api/station/([^/]+)/status()()()()()()()()|/api/station/([^/]+)/fallback()()()()()()()()()|/api/station/([^/]+)/webhook/([^/]+)/test\\-log/([^/]+)()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route266',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route267',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          4 => 
          array (
            0 => 'route268',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          5 => 
          array (
            0 => 'route269',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          6 => 
          array (
            0 => 'route270',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route271',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          8 => 
          array (
            0 => 'route272',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
              'broadcast_id' => 'broadcast_id',
            ),
          ),
          9 => 
          array (
            0 => 'route274',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          10 => 
          array (
            0 => 'route275',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route280',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route285',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
              'path' => 'path',
            ),
          ),
        ),
      ),
    ),
    'POST' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/admin/debug/station/([^/]+)/nowplaying|/admin/debug/station/([^/]+)/nextsong()|/admin/debug/station/([^/]+)/telnet()()|/recover/([^/]+)()()()|/station/([^/]+)/reports/soundexchange()()()()|/api/internal/([^/]+)/auth()()()()()|/api/internal/([^/]+)/nextsong()()()()()()|/api/internal/([^/]+)/djon()()()()()()()|/api/internal/([^/]+)/djoff()()()()()()()()|/api/internal/([^/]+)/feedback()()()()()()()()()|/api/internal/([^/]+)/listener\\-auth()()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route6',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route7',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          4 => 
          array (
            0 => 'route8',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          5 => 
          array (
            0 => 'route35',
            1 => 
            array (
              'token' => 'token',
            ),
          ),
          6 => 
          array (
            0 => 'route73',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route83',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          8 => 
          array (
            0 => 'route84',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route85',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          10 => 
          array (
            0 => 'route86',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route87',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route88',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
      1 => 
      array (
        'regex' => '~^(?|/api/admin/custom_assets/([^/]+)|/api/admin/station/([^/]+)/clone()|/api/station/([^/]+)/nowplaying/update()()|/api/station/([^/]+)/queue/clear()()()|/api/station/([^/]+)/request/([^/]+)()()()|/api/station/([^/]+)/art/([a-zA-Z0-9]+)()()()()|/api/station/([^/]+)/podcasts()()()()()()|/api/station/([^/]+)/podcasts/art()()()()()()()|/api/station/([^/]+)/podcast/([^/]+)/art()()()()()()()|/api/station/([^/]+)/podcast/([^/]+)/episodes()()()()()()()()|/api/station/([^/]+)/podcast/([^/]+)/episodes/art()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route109',
            1 => 
            array (
              'type' => 'type',
            ),
          ),
          3 => 
          array (
            0 => 'route140',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          4 => 
          array (
            0 => 'route160',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          5 => 
          array (
            0 => 'route168',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          6 => 
          array (
            0 => 'route171',
            1 => 
            array (
              'station_id' => 'station_id',
              'media_id' => 'media_id',
            ),
          ),
          7 => 
          array (
            0 => 'route178',
            1 => 
            array (
              'station_id' => 'station_id',
              'media_id' => 'media_id',
            ),
          ),
          8 => 
          array (
            0 => 'route189',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route190',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          10 => 
          array (
            0 => 'route193',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
          11 => 
          array (
            0 => 'route195',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
          12 => 
          array (
            0 => 'route196',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
        ),
      ),
      2 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/podcast/([^/]+)/episodes/media|/api/station/([^/]+)/podcast/([^/]+)/episode/([^/]+)/art|/api/station/([^/]+)/podcast/([^/]+)/episode/([^/]+)/media()|/api/station/([^/]+)/files()()()()|/api/station/([^/]+)/mounts()()()()()|/api/station/([^/]+)/playlists()()()()()()|/api/station/([^/]+)/remotes()()()()()()()|/api/station/([^/]+)/sftp\\-users()()()()()()()()|/api/station/([^/]+)/streamers()()()()()()()()()|/api/station/([^/]+)/webhooks()()()()()()()()()()|/api/station/([^/]+)/files/mkdir()()()()()()()()()()())$~',
        'routeMap' => 
        array (
          3 => 
          array (
            0 => 'route197',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
          4 => 
          array (
            0 => 'route200',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          5 => 
          array (
            0 => 'route202',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          6 => 
          array (
            0 => 'route205',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          7 => 
          array (
            0 => 'route210',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          8 => 
          array (
            0 => 'route215',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route220',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          10 => 
          array (
            0 => 'route225',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route230',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route235',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          13 => 
          array (
            0 => 'route243',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
      3 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/files/upload|/api/station/([^/]+)/mounts/intro()|/api/station/([^/]+)/mount/([^/]+)/intro()|/api/station/([^/]+)/playlist/([^/]+)/clone()()|/api/station/([^/]+)/playlist/([^/]+)/import()()()|/api/station/([^/]+)/reports/requests/clear()()()()()|/api/station/([^/]+)/backend/([^/]+)()()()()()|/api/station/([^/]+)/frontend/([^/]+)()()()()()()|/api/station/([^/]+)/reload()()()()()()()()|/api/station/([^/]+)/restart()()()()()()()()()|/api/station/([^/]+)/fallback()()()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route246',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route247',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          4 => 
          array (
            0 => 'route249',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          5 => 
          array (
            0 => 'route258',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          6 => 
          array (
            0 => 'route259',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          7 => 
          array (
            0 => 'route262',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          8 => 
          array (
            0 => 'route276',
            1 => 
            array (
              'station_id' => 'station_id',
              'do' => 'do',
            ),
          ),
          9 => 
          array (
            0 => 'route277',
            1 => 
            array (
              'station_id' => 'station_id',
              'do' => 'do',
            ),
          ),
          10 => 
          array (
            0 => 'route278',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          11 => 
          array (
            0 => 'route279',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          12 => 
          array (
            0 => 'route281',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
    ),
    'OPTIONS' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/api/(.+))$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route78',
            1 => 
            array (
              'routes' => 'routes',
            ),
          ),
        ),
      ),
    ),
    'DELETE' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/api/admin/api\\-key/([^/]+)|/api/admin/backups/delete/([^/]+)()|/api/admin/custom_assets/([^/]+)()()|/api/admin/custom_field/([^/]+)()()()|/api/admin/role/([^/]+)()()()()|/api/admin/station/([^/]+)()()()()()|/api/admin/user/([^/]+)()()()()()()|/api/admin/storage_location/([^/]+)()()()()()()()|/api/frontend/account/api\\-key/([^/]+)()()()()()()()()|/api/station/([^/]+)/queue/([^/]+)()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route95',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          3 => 
          array (
            0 => 'route101',
            1 => 
            array (
              'path' => 'path',
            ),
          ),
          4 => 
          array (
            0 => 'route110',
            1 => 
            array (
              'type' => 'type',
            ),
          ),
          5 => 
          array (
            0 => 'route119',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          6 => 
          array (
            0 => 'route124',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          7 => 
          array (
            0 => 'route129',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          8 => 
          array (
            0 => 'route134',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          9 => 
          array (
            0 => 'route139',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          10 => 
          array (
            0 => 'route151',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          11 => 
          array (
            0 => 'route169',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
        ),
      ),
      1 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/art/([a-zA-Z0-9]+)|/api/station/([^/]+)/podcast/([^/]+)()|/api/station/([^/]+)/podcast/([^/]+)/art()()|/api/station/([^/]+)/podcast/([^/]+)/episode/([^/]+)()()|/api/station/([^/]+)/podcast/([^/]+)/episode/([^/]+)/art()()()|/api/station/([^/]+)/podcast/([^/]+)/episode/([^/]+)/media()()()()|/api/station/([^/]+)/file/([^/]+)()()()()()()|/api/station/([^/]+)/mount/([^/]+)()()()()()()()|/api/station/([^/]+)/playlist/([^/]+)()()()()()()()()|/api/station/([^/]+)/remote/([^/]+)()()()()()()()()())$~',
        'routeMap' => 
        array (
          3 => 
          array (
            0 => 'route179',
            1 => 
            array (
              'station_id' => 'station_id',
              'media_id' => 'media_id',
            ),
          ),
          4 => 
          array (
            0 => 'route192',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
          5 => 
          array (
            0 => 'route194',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
          6 => 
          array (
            0 => 'route199',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          7 => 
          array (
            0 => 'route201',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          8 => 
          array (
            0 => 'route203',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          9 => 
          array (
            0 => 'route208',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          10 => 
          array (
            0 => 'route213',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          11 => 
          array (
            0 => 'route218',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          12 => 
          array (
            0 => 'route223',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
        ),
      ),
      2 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/sftp\\-user/([^/]+)|/api/station/([^/]+)/streamer/([^/]+)()|/api/station/([^/]+)/webhook/([^/]+)()()|/api/station/([^/]+)/mount/([^/]+)/intro()()()|/api/station/([^/]+)/playlist/([^/]+)/queue()()()()|/api/station/([^/]+)/reports/requests/([^/]+)()()()()()|/api/station/([^/]+)/streamer/([^/]+)/broadcast/([^/]+)()()()()()|/api/station/([^/]+)/fallback()()()()()()()())$~',
        'routeMap' => 
        array (
          3 => 
          array (
            0 => 'route228',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          4 => 
          array (
            0 => 'route233',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          5 => 
          array (
            0 => 'route238',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          6 => 
          array (
            0 => 'route250',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          7 => 
          array (
            0 => 'route257',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          8 => 
          array (
            0 => 'route263',
            1 => 
            array (
              'station_id' => 'station_id',
              'request_id' => 'request_id',
            ),
          ),
          9 => 
          array (
            0 => 'route273',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
              'broadcast_id' => 'broadcast_id',
            ),
          ),
          10 => 
          array (
            0 => 'route282',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
    ),
    'PUT' => 
    array (
      0 => 
      array (
        'regex' => '~^(?|/api/admin/settings/([^/]+)|/api/admin/custom_field/([^/]+)()|/api/admin/role/([^/]+)()()|/api/admin/station/([^/]+)()()()|/api/admin/user/([^/]+)()()()()|/api/admin/storage_location/([^/]+)()()()()()|/api/station/([^/]+)/automation/settings()()()()()()|/api/station/([^/]+)/automation/run()()()()()()()|/api/station/([^/]+)/profile/edit()()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route106',
            1 => 
            array (
              'group' => 'group',
            ),
          ),
          3 => 
          array (
            0 => 'route118',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          4 => 
          array (
            0 => 'route123',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          5 => 
          array (
            0 => 'route128',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          6 => 
          array (
            0 => 'route133',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          7 => 
          array (
            0 => 'route138',
            1 => 
            array (
              'id' => 'id',
            ),
          ),
          8 => 
          array (
            0 => 'route157',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          9 => 
          array (
            0 => 'route158',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          10 => 
          array (
            0 => 'route163',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
        ),
      ),
      1 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/liquidsoap\\-config|/api/station/([^/]+)/podcast/([^/]+)|/api/station/([^/]+)/podcast/([^/]+)/episode/([^/]+)|/api/station/([^/]+)/file/([^/]+)()()|/api/station/([^/]+)/mount/([^/]+)()()()|/api/station/([^/]+)/playlist/([^/]+)()()()()|/api/station/([^/]+)/remote/([^/]+)()()()()()|/api/station/([^/]+)/sftp\\-user/([^/]+)()()()()()()|/api/station/([^/]+)/streamer/([^/]+)()()()()()()())$~',
        'routeMap' => 
        array (
          2 => 
          array (
            0 => 'route181',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          3 => 
          array (
            0 => 'route191',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
            ),
          ),
          4 => 
          array (
            0 => 'route198',
            1 => 
            array (
              'station_id' => 'station_id',
              'podcast_id' => 'podcast_id',
              'episode_id' => 'episode_id',
            ),
          ),
          5 => 
          array (
            0 => 'route207',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          6 => 
          array (
            0 => 'route212',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          7 => 
          array (
            0 => 'route217',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          8 => 
          array (
            0 => 'route222',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          9 => 
          array (
            0 => 'route227',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          10 => 
          array (
            0 => 'route232',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
        ),
      ),
      2 => 
      array (
        'regex' => '~^(?|/api/station/([^/]+)/webhook/([^/]+)|/api/station/([^/]+)/files/rename()()|/api/station/([^/]+)/files/batch()()()|/api/station/([^/]+)/playlist/([^/]+)/toggle()()()|/api/station/([^/]+)/playlist/([^/]+)/reshuffle()()()()|/api/station/([^/]+)/playlist/([^/]+)/order()()()()()|/api/station/([^/]+)/webhook/([^/]+)/toggle()()()()()()|/api/station/([^/]+)/webhook/([^/]+)/test()()()()()()())$~',
        'routeMap' => 
        array (
          3 => 
          array (
            0 => 'route237',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          4 => 
          array (
            0 => 'route241',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          5 => 
          array (
            0 => 'route242',
            1 => 
            array (
              'station_id' => 'station_id',
            ),
          ),
          6 => 
          array (
            0 => 'route252',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          7 => 
          array (
            0 => 'route253',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          8 => 
          array (
            0 => 'route255',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          9 => 
          array (
            0 => 'route283',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
          10 => 
          array (
            0 => 'route284',
            1 => 
            array (
              'station_id' => 'station_id',
              'id' => 'id',
            ),
          ),
        ),
      ),
    ),
  ),
);