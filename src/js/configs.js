// configs for the supported pieces of software
// hasVersions, showSupports, supportsConfigs, supportsHsts, supportsOcspStapling, and usesOpenssl only need to be defined if false
// cipherFormat is assumed to be 'openssl' unless defined otherwise
const noSupportedVersion = '10000.10000.10000';


module.exports = {
  apache: {
    highlighter: 'apache',
    latestVersion: '2.4.41',
    name: 'Apache',
    tls13: '2.4.36',
  },
  awsalb: {
    hasVersions: false,
    highlighter: 'yaml',
    latestVersion: '2023.3.22',
    name: 'AWS ALB',
    showSupports: false,
    supportsOcspStapling: false,
    tls13: '2023.3.22',
    usesOpenssl: false,
  },
  // supported ciphers generated with:
  // aws elb describe-load-balancer-policies --query "PolicyDescriptions[?PolicyName=='ELBSample-ELBDefaultCipherPolicy'].PolicyAttributeDescriptions[*].AttributeName[]"
  awselb: {
    hasVersions: false,
    highlighter: 'yaml',
    latestVersion: '2014.2.19',
    name: 'AWS ELB',
    supportedCiphers: ['ECDHE-ECDSA-AES128-GCM-SHA256', 'ECDHE-RSA-AES128-GCM-SHA256', 'ECDHE-ECDSA-AES128-SHA256', 'ECDHE-RSA-AES128-SHA256', 'ECDHE-ECDSA-AES128-SHA', 'ECDHE-RSA-AES128-SHA', 'DHE-RSA-AES128-SHA', 'ECDHE-ECDSA-AES256-GCM-SHA384', 'ECDHE-RSA-AES256-GCM-SHA384', 'ECDHE-ECDSA-AES256-SHA384', 'ECDHE-RSA-AES256-SHA384', 'ECDHE-RSA-AES256-SHA', 'ECDHE-ECDSA-AES256-SHA', 'AES128-GCM-SHA256', 'AES128-SHA256', 'AES128-SHA', 'AES256-GCM-SHA384', 'AES256-SHA256', 'AES256-SHA', 'DHE-DSS-AES128-SHA', 'CAMELLIA128-SHA', 'EDH-RSA-DES-CBC3-SHA', 'DES-CBC3-SHA', 'ECDHE-RSA-RC4-SHA', 'RC4-SHA', 'ECDHE-ECDSA-RC4-SHA', 'DHE-DSS-AES256-GCM-SHA384', 'DHE-RSA-AES256-GCM-SHA384', 'DHE-RSA-AES256-SHA256', 'DHE-DSS-AES256-SHA256', 'DHE-RSA-AES256-SHA', 'DHE-DSS-AES256-SHA', 'DHE-RSA-CAMELLIA256-SHA', 'DHE-DSS-CAMELLIA256-SHA', 'CAMELLIA256-SHA', 'EDH-DSS-DES-CBC3-SHA', 'DHE-DSS-AES128-GCM-SHA256', 'DHE-RSA-AES128-GCM-SHA256', 'DHE-RSA-AES128-SHA256', 'DHE-DSS-AES128-SHA256', 'DHE-RSA-CAMELLIA128-SHA', 'DHE-DSS-CAMELLIA128-SHA', 'ADH-AES128-GCM-SHA256', 'ADH-AES128-SHA', 'ADH-AES128-SHA256', 'ADH-AES256-GCM-SHA384', 'ADH-AES256-SHA', 'ADH-AES256-SHA256', 'ADH-CAMELLIA128-SHA', 'ADH-CAMELLIA256-SHA', 'ADH-DES-CBC3-SHA', 'ADH-DES-CBC-SHA', 'ADH-RC4-MD5', 'ADH-SEED-SHA', 'DES-CBC-SHA', 'DHE-DSS-SEED-SHA', 'DHE-RSA-SEED-SHA', 'EDH-DSS-DES-CBC-SHA', 'EDH-RSA-DES-CBC-SHA', 'IDEA-CBC-SHA', 'RC4-MD5', 'SEED-SHA', 'DES-CBC3-MD5', 'DES-CBC-MD5', 'RC2-CBC-MD5', 'PSK-AES256-CBC-SHA', 'PSK-3DES-EDE-CBC-SHA', 'KRB5-DES-CBC3-SHA', 'KRB5-DES-CBC3-MD5', 'PSK-AES128-CBC-SHA', 'PSK-RC4-SHA', 'KRB5-RC4-SHA', 'KRB5-RC4-MD5', 'KRB5-DES-CBC-SHA', 'KRB5-DES-CBC-MD5', 'EXP-EDH-RSA-DES-CBC-SHA', 'EXP-EDH-DSS-DES-CBC-SHA', 'EXP-ADH-DES-CBC-SHA', 'EXP-DES-CBC-SHA', 'EXP-RC2-CBC-MD5', 'EXP-KRB5-RC2-CBC-SHA', 'EXP-KRB5-DES-CBC-SHA', 'EXP-KRB5-RC2-CBC-MD5', 'EXP-KRB5-DES-CBC-MD5', 'EXP-ADH-RC4-MD5', 'EXP-RC4-MD5', 'EXP-KRB5-RC4-SHA', 'EXP-KRB5-RC4-MD5'],
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: noSupportedVersion,
    usesOpenssl: false,
  },
  caddy: {
    cipherFormat: 'caddy',
    highlighter: 'nginx', // TODO: find better
    latestVersion: '2.1.1',
    name: 'Caddy',
    supportsOcspStapling: false, // actually true; can't be disabled in Caddy
    tls13: '0.11.5',
    usesOpenssl: false,
  },
  coturn: {
    highlighter: 'ini',
    latestVersion: '4.6.2',
    name: 'Coturn',
    showSupports: false,
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '4.6.2',
  },
  dovecot: {
    highlighter: 'nginx', // TODO: find better
    latestVersion: '2.3.16',
    name: 'Dovecot',
    showSupports: false,
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '2.3.15',
  },
  exim: {
    highlighter: 'nginx',
    latestVersion: '4.93',
    name: 'Exim',
    showSupports: false,
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '4.92.0',
  },
  go: {
    cipherFormat: 'go',
    highlighter: 'go',
    latestVersion: '1.14.4',
    name: 'Go',
    supportsOcspStapling: false,
    tls13: '1.13.0',
    usesOpenssl: false,
  },
  haproxy: {
    highlighter: 'nginx',  // TODO: find better
    latestVersion: '2.1',
    name: 'HAProxy',
    tls13: '1.8.0',
  },
  jetty: {
    cipherFormat: 'iana',
    highlighter: 'xml',
    latestVersion: '12.0.12',
    name: 'Jetty',
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '9.4.12',
    usesOpenssl: false,
  },
  lighttpd: {
    highlighter: 'nginx',
    latestVersion: '1.4.67',
    name: 'lighttpd',
    tls13: '1.4.48',
  },
  mysql: {
    highlighter: 'ini',
    latestVersion: '8.0.19',
    name: 'MySQL',
    showSupports: false,
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '8.0.16',
  },
  nginx: {
    checked: true,
    highlighter: 'nginx',
    latestVersion: '1.26.0',
    name: 'nginx',
    tls13: '1.13.0',
  },
  openssl: {
    latestVersion: '1.1.1w',
    tls13: '1.1.1',
  },
  oraclehttp: {
    highlighter: 'apache',
    latestVersion: '12.2.1',
    name: 'Oracle HTTP',
    supportsOcspStapling: false,  // TODO: needs updating; docs only available to customers:/
    tls13: noSupportedVersion,    // TODO: needs updating; docs only available to customers:/
  },
  postfix: {
    highlighter: 'nginx',
    latestVersion: '3.4.8',
    name: 'Postfix',
    showSupports: false,
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '3.3.2',
  },
  postgresql: {
    highlighter: 'nginx',
    latestVersion: '12.1',
    name: 'PostgreSQL',
    showSupports: false,
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '12.0',
  },
  proftpd: {
    highlighter: 'apache',
    latestVersion: '1.3.7',
    name: 'ProFTPD',
    showSupports: false,
    supportsHsts: false,
    tls13: '1.3.7',
  },
  redis: {
    highlighter: 'nginx',
    latestVersion: '6.0',
    name: 'Redis',
    showSupports: false,
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '6.0',
  },
  squid: {
    highlighter: 'nginx',  // TODO: find better
    latestVersion: '5.6',
    name: 'Squid',
    showSupports: false,
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '4',
  },
  stunnel: {
    highlighter: 'ini',
    latestVersion: '5.71',
    name: 'stunnel',
    supportsHsts: false,
    supportsOcspStapling: false,
    tls13: '5.50',
  },
  tomcat: {
    highlighter: 'xml',
    latestVersion: '9.0.96',
    name: 'Tomcat',
    supportsOcspStapling: false,
    tls13: '8.0.0',
    usesOpenssl: false,
  },
  traefik: {
    cipherFormat: 'go',
    highlighter: 'ini',
    latestVersion: '2.1.2',
    name: 'Traefik',
    supportsOcspStapling: false,  // https://github.com/containous/traefik/issues/212
    tls13: '2.0.0',
    usesOpenssl: false,
  },
};
