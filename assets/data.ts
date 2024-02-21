export interface Country {
  name: string[];
  code: string;
}

export const incorrectResponses = [
  'Oops! Wrong answer, but nice try!',
  'Uh-oh! Not quite there, but keep going!',
  "Oh no! That's not it, but don't give up!",
  'Close, but no cigar! Keep guessing!',
  'Not quite! Give it another shot!',
  "Oopsie! That's a miss, but keep trying!",
  "Not this time! Keep guessing, you're close!",
  'Swing and a miss! Keep aiming!',
  "Oh dear! That's not it, but keep going!",
  'So close, yet so far! Try again!',
  "Oh snap! That's not the one, try another!",
  'Almost there, but not quite! Keep guessing!',
  "Oops! That's a miss, but keep trying!",
  'Oh no! Not quite, but keep on guessing!',
  'Close, but not quite right! Keep trying!',
  "Nope, not this time! But don't give up!",
  "Oh my! That's not it, but keep guessing!",
  "D'oh! Wrong answer, but keep on guessing!",
  "Oh dear! That's not it, but keep guessing!",
  "Not quite! Keep guessing, you're almost there!",
];

// Array of responses for correct guesses
export const correctResponses = [
  'Boom! You nailed it!',
  "Bingo! You're a geography wizard!",
  'You got it! Time to celebrate!',
  "Hooray! You're on fire!",
  'Ding ding ding! Correctamundo!',
  "Bravo! You're unstoppable!",
  'Aced it! Keep the streak going!',
  "Yes! You're crushing it!",
  'Absolutely right! High five!',
  "You're killing it! Keep the guesses coming!",
  "Bullseye! You're unstoppable!",
  'Winner winner, chicken dinner!',
  "Nailed it! You're on a roll!",
  'Woohoo! Correct-o-mundo!',
  'Right on the money! Keep it up!',
  "Spot on! You're a genius!",
  "Perfect! You're unstoppable!",
  'Bang on target! Keep the guesses coming!',
  "Excellent! You're on fire!",
  'Absolutely fantastic! Keep up the good work!',
];

export const countries = [
  { name: ['Andorra'], code: 'AD' },
  { name: ['United Arab Emirates', 'UAE'], code: 'AE' },
  { name: ['Afghanistan'], code: 'AF' },
  { name: ['Antigua and Barbuda'], code: 'AG' },
  { name: ['Anguilla'], code: 'AI' },
  { name: ['Albania'], code: 'AL' },
  { name: ['Armenia'], code: 'AM' },
  { name: ['Netherlands Antilles'], code: 'AN' },
  { name: ['Angola'], code: 'AO' },
  { name: ['Antarctica'], code: 'AQ' },
  { name: ['Argentina'], code: 'AR' },
  { name: ['American Samoa'], code: 'AS' },
  { name: ['Austria'], code: 'AT' },
  { name: ['Australia'], code: 'AU' },
  { name: ['Aruba'], code: 'AW' },
  { name: ['Aland Islands'], code: 'AX' },
  { name: ['Azerbaijan'], code: 'AZ' },
  { name: ['Bosnia and Herzegovina'], code: 'BA' },
  { name: ['Barbados'], code: 'BB' },
  { name: ['Bangladesh'], code: 'BD' },
  { name: ['Belgium'], code: 'BE' },
  { name: ['Burkina Faso'], code: 'BF' },
  { name: ['Bulgaria'], code: 'BG' },
  { name: ['Bahrain'], code: 'BH' },
  { name: ['Burundi'], code: 'BI' },
  { name: ['Benin'], code: 'BJ' },
  { name: ['Bermuda'], code: 'BM' },
  { name: ['Brunei Darussalam'], code: 'BN' },
  { name: ['Bolivia'], code: 'BO' },
  { name: ['Brazil'], code: 'BR' },
  { name: ['Bahamas'], code: 'BS' },
  { name: ['Bhutan'], code: 'BT' },
  { name: ['Botswana'], code: 'BW' },
  { name: ['Belarus'], code: 'BY' },
  { name: ['Belize'], code: 'BZ' },
  { name: ['Canada'], code: 'CA' },
  { name: ['Cocos Islands'], code: 'CC' },
  { name: ['Democratic Republic of the Congo', 'DRC'], code: 'CD' },
  { name: ['Central African Republic'], code: 'CF' },
  { name: ['Congo'], code: 'CG' },
  { name: ['Switzerland'], code: 'CH' },
  { name: ["Cote D'Ivoire"], code: 'CI' },
  { name: ['Cook Islands'], code: 'CK' },
  { name: ['Chile'], code: 'CL' },
  { name: ['Cameroon'], code: 'CM' },
  { name: ['China'], code: 'CN' },
  { name: ['Colombia'], code: 'CO' },
  { name: ['Costa Rica'], code: 'CR' },
  { name: ['Cuba'], code: 'CU' },
  { name: ['Cape Verde'], code: 'CV' },
  { name: ['Curacao'], code: 'CW' },
  { name: ['Christmas Island'], code: 'CX' },
  { name: ['Cyprus'], code: 'CY' },
  { name: ['Czech Republic'], code: 'CZ' },
  { name: ['Germany'], code: 'DE' },
  { name: ['Djibouti'], code: 'DJ' },
  { name: ['Denmark'], code: 'DK' },
  { name: ['Dominica'], code: 'DM' },
  { name: ['Dominican Republic'], code: 'DO' },
  { name: ['Algeria'], code: 'DZ' },
  { name: ['Ecuador'], code: 'EC' },
  { name: ['Estonia'], code: 'EE' },
  { name: ['Egypt'], code: 'EG' },
  { name: ['Western Sahara'], code: 'EH' },
  { name: ['Eritrea'], code: 'ER' },
  { name: ['Spain'], code: 'ES' },
  { name: ['Ethiopia'], code: 'ET' },
  { name: ['Finland'], code: 'FI' },
  { name: ['Fiji'], code: 'FJ' },
  { name: ['Falkland Islands'], code: 'FK' },
  { name: ['Micronesia'], code: 'FM' },
  { name: ['Faroe Islands'], code: 'FO' },
  { name: ['France'], code: 'FR' },
  { name: ['Gabon'], code: 'GA' },
  { name: ['United Kingdom', 'England', 'UK'], code: 'GB' },
  { name: ['Grenada'], code: 'GD' },
  { name: ['Georgia'], code: 'GE' },
  { name: ['Guernsey'], code: 'GG' },
  { name: ['Ghana'], code: 'GH' },
  { name: ['Gibraltar'], code: 'GI' },
  { name: ['Greenland'], code: 'GL' },
  { name: ['Gambia'], code: 'GM' },
  { name: ['Guinea'], code: 'GN' },
  { name: ['Equatorial Guinea'], code: 'GQ' },
  { name: ['Greece'], code: 'GR' },
  { name: ['South Georgia and the South Sandwich Islands'], code: 'GS' },
  { name: ['Guatemala'], code: 'GT' },
  { name: ['Guam'], code: 'GU' },
  { name: ['Guinea-Bissau'], code: 'GW' },
  { name: ['Guyana'], code: 'GY' },
  { name: ['Hong Kong'], code: 'HK' },
  { name: ['Honduras'], code: 'HN' },
  { name: ['Croatia'], code: 'HR' },
  { name: ['Haiti'], code: 'HT' },
  { name: ['Hungary'], code: 'HU' },
  { name: ['Indonesia'], code: 'ID' },
  { name: ['Ireland'], code: 'IE' },
  { name: ['Israel'], code: 'IL' },
  { name: ['Isle of Man'], code: 'IM' },
  { name: ['India'], code: 'IN' },
  { name: ['Iraq'], code: 'IQ' },
  { name: ['Iran'], code: 'IR' },
  { name: ['Iceland'], code: 'IS' },
  { name: ['Italy'], code: 'IT' },
  { name: ['Jersey'], code: 'JE' },
  { name: ['Jamaica'], code: 'JM' },
  { name: ['Jordan'], code: 'JO' },
  { name: ['Japan'], code: 'JP' },
  { name: ['Kenya'], code: 'KE' },
  { name: ['Kyrgyzstan'], code: 'KG' },
  { name: ['Cambodia'], code: 'KH' },
  { name: ['Kiribati'], code: 'KI' },
  { name: ['Comoros'], code: 'KM' },
  { name: ['Saint Kitts and Nevis'], code: 'KN' },
  { name: ["Democratic People's Republic of Korea","North Korea"], code: 'KP' },
  { name: ["Republic of Korea", "South Korea", "Korea"], code: 'KR' },
  { name: ['Kuwait'], code: 'KW' },
  { name: ['Cayman Islands'], code: 'KY' },
  { name: ['Kazakhstan'], code: 'KZ' },
  { name: ['Laos'], code: 'LA' },
  { name: ['Lebanon'], code: 'LB' },
  { name: ['Saint Lucia'], code: 'LC' },
  { name: ['Liechtenstein'], code: 'LI' },
  { name: ['Sri Lanka'], code: 'LK' },
  { name: ['Liberia'], code: 'LR' },
  { name: ['Lesotho'], code: 'LS' },
  { name: ['Lithuania'], code: 'LT' },
  { name: ['Luxembourg'], code: 'LU' },
  { name: ['Latvia'], code: 'LV' },
  { name: ['Libya'], code: 'LY' },
  { name: ['Morocco'], code: 'MA' },
  { name: ['Monaco'], code: 'MC' },
  { name: ['Moldova'], code: 'MD' },
  { name: ['Montenegro'], code: 'ME' },
  { name: ['Saint Martin'], code: 'MF' },
  { name: ['Madagascar'], code: 'MG' },
  { name: ['Marshall Islands'], code: 'MH' },
  { name: ['Macedonia', 'North Macedonia'], code: 'MK' },
  { name: ['Mali'], code: 'ML' },
  { name: ['Myanmar'], code: 'MM' },
  { name: ['Mongolia'], code: 'MN' },
  { name: ['Mauritius'], code: 'MU' },
  { name: ['Maldives'], code: 'MV' },
  { name: ['Malawi'], code: 'MW' },
  { name: ['Mexico'], code: 'MX' },
  { name: ['Malaysia'], code: 'MY' },
  { name: ['Mozambique'], code: 'MZ' },
  { name: ['Namibia'], code: 'NA' },
  { name: ['New Caledonia'], code: 'NC' },
  { name: ['Niger'], code: 'NE' },
  { name: ['Norfolk Island'], code: 'NF' },
  { name: ['Nigeria'], code: 'NG' },
  { name: ['Nicaragua'], code: 'NI' },
  { name: ['Netherlands Antilles'], code: 'NL' },
  { name: ['Norway'], code: 'NO' },
  { name: ['Nepal'], code: 'NP' },
  { name: ['Nauru'], code: 'NR' },
  { name: ['French Polynesia'], code: 'PF' },
  { name: ['Papua New Guinea'], code: 'PG' },
  { name: ['Palestine'], code: 'PS' },
  { name: ['Portugal'], code: 'PT' },
  { name: ['Palau'], code: 'PW' },
  { name: ['Paraguay'], code: 'PY' },
  { name: ['Qatar'], code: 'QA' },
  { name: ['Reunion'], code: 'RE' },
  { name: ['Romania'], code: 'RO' },
  { name: ['Serbia'], code: 'RS' },
  { name: ['Russia'], code: 'RU' },
  { name: ['Rwanda'], code: 'RW' },
  { name: ['Saudi Arabia'], code: 'SA' },
  { name: ['Solomon Islands'], code: 'SB' },
  { name: ['Seychelles'], code: 'SC' },
  { name: ['Sudan'], code: 'SD' },
  { name: ['Sweden'], code: 'SE' },
  { name: ['Singapore'], code: 'SG' },
  { name: ['Saint Helena'], code: 'SH' },
  { name: ['Slovenia'], code: 'SI' },
  { name: ['Slovakia'], code: 'SK' },
  { name: ['Sierra Leone'], code: 'SL' },
  { name: ['San Marino'], code: 'SM' },
  { name: ['Senegal'], code: 'SN' },
  { name: ['Somalia'], code: 'SO' },
  { name: ['Suriname'], code: 'SR' },
  { name: ['South Sudan'], code: 'SS' },
  { name: ['Sao Tome and Principe'], code: 'ST' },
  { name: ['El Salvador'], code: 'SV' },
  { name: ['Syria'], code: 'SY' },
  { name: ['Swaziland'], code: 'SZ' },
  { name: ['Turks and Caicos Islands'], code: 'TC' },
  { name: ['Chad'], code: 'TD' },
  { name: ['French Southern Territories'], code: 'TF' },
  { name: ['Togo'], code: 'TG' },
  { name: ['Thailand'], code: 'TH' },
  { name: ['Tajikistan'], code: 'TJ' },
  { name: ['Tokelau'], code: 'TK' },
  { name: ['Timor-Leste'], code: 'TL' },
  { name: ['Turkmenistan'], code: 'TM' },
  { name: ['Tunisia'], code: 'TN' },
  { name: ['Tonga'], code: 'TO' },
  { name: ['Turkey'], code: 'TR' },
  { name: ['Trinidad and Tobago'], code: 'TT' },
  { name: ['Tuvalu'], code: 'TV' },
  { name: ['Taiwan'], code: 'TW' },
  { name: ['Tanzania'], code: 'TZ' },
  { name: ['Ukraine'], code: 'UA' },
  { name: ['Uganda'], code: 'UG' },
  { name: ['United States', 'US', 'USA', 'United States of America'], code: 'US' },
  { name: ['Uruguay'], code: 'UY' },
  { name: ['Uzbekistan'], code: 'UZ' },
  { name: ['Vatican', 'Vatican City', 'Vatican City State'], code: 'VA' },
  { name: ['Saint Vincent and the Grenadines'], code: 'VC' },
  { name: ['Venezuela'], code: 'VE' },
  { name: ['British Virgin Islands', 'Virgin Islands'], code: 'VG' },
  { name: ['US Virgin Islands', 'Virgin Islands'], code: 'VI' },
  { name: ['Vietnam'], code: 'VN' },
  { name: ['Vanuatu'], code: 'VU' },
  { name: ['Wallis and Futuna'], code: 'WF' },
  { name: ['Samoa'], code: 'WS' },
  { name: ['Yemen'], code: 'YE' },
  { name: ['Mayotte'], code: 'YT' },
  { name: ['South Africa'], code: 'ZA' },
  { name: ['Zambia'], code: 'ZM' },
  { name: ['Zimbabwe'], code: 'ZW' },
];
