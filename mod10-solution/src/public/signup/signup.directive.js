(function () {
"use strict";

angular.module('public')
.directive('dish', function(){
	return {
        require: 'ngModel',
        link: function(scope,elem,attrs,ctrl){
        	ctrl.$validators.dish = function(modelValue,viewValue) {
        		if (viewValue=='A1'||viewValue=='A2'||viewValue=='A3'||viewValue=='A4'||viewValue=='A5'||viewValue=='A6'
        			||viewValue=='A7'||viewValue=='A8'||viewValue=='A9'||viewValue=='A10'||viewValue=='A11'||viewValue=='B1'
        			||viewValue=='B2'||viewValue=='B3'||viewValue=='B4'||viewValue=='B5'||viewValue=='B6'||viewValue=='B7'
        			||viewValue=='B8'||viewValue=='B9'||viewValue=='B10'||viewValue=='B11'||viewValue=='B12'||viewValue=='B13'
        			||viewValue=='B14'||viewValue=='B15'||viewValue=='B16'||viewValue=='SP1'||viewValue=='SP2'||viewValue=='SP3'
        			||viewValue=='SP4'||viewValue=='SP5'||viewValue=='SP6'||viewValue=='SP7'||viewValue=='SP8'||viewValue=='C1'
        			||viewValue=='C2'||viewValue=='C3'||viewValue=='C4'||viewValue=='C5'||viewValue=='C6'||viewValue=='C7'
        			||viewValue=='C8'||viewValue=='C9'||viewValue=='C10'||viewValue=='C11'||viewValue=='C12'||viewValue=='C13'
        			||viewValue=='C14'||viewValue=='C15'||viewValue=='C16'||viewValue=='C17'||viewValue=='C18'||viewValue=='C19'
        			||viewValue=='F1'||viewValue=='F2'||viewValue=='F3'||viewValue=='F4'||viewValue=='F5'||viewValue=='F6'
        			||viewValue=='F7'||viewValue=='F8'||viewValue=='F9'||viewValue=='F10'||viewValue=='F11'||viewValue=='F12'
        			||viewValue=='V1'||viewValue=='V2'||viewValue=='V3'||viewValue=='V4'||viewValue=='V5'||viewValue=='V6'
        			||viewValue=='V7'||viewValue=='DK1'||viewValue=='DK2'||viewValue=='DK3'||viewValue=='VG1'||viewValue=='VG2'
        			||viewValue=='VG3'||viewValue=='VG4'||viewValue=='VG5'||viewValue=='VG6'||viewValue=='VG7'||viewValue=='VG8'
        			||viewValue=='VG9'||viewValue=='VG10'||viewValue=='VG11'||viewValue=='VG12'||viewValue=='VG13'||viewValue=='VG14'
        			||viewValue=='CU21'||viewValue=='CU22'||viewValue=='CU23'||viewValue=='NL1'||viewValue=='NL2'||viewValue=='NL3'
        			||viewValue=='NL4'||viewValue=='NL5'||viewValue=='NF10'||viewValue=='NF11'||viewValue=='NF12'||viewValue=='NF13'
        			||viewValue=='PF1'||viewValue=='PF2'||viewValue=='PF3'||viewValue=='PF4'||viewValue=='PF5'||viewValue=='FR1'
        			||viewValue=='FR2'||viewValue=='FR3'||viewValue=='FR4'||viewValue=='FR5'||viewValue=='SO1'||viewValue=='SO2'
        			||viewValue=='SO3'||viewValue=='SO4'||viewValue=='SO5'||viewValue=='SO6'||viewValue=='SO7'||viewValue=='DS1'
        			||viewValue=='DS2'||viewValue=='D1'||viewValue=='D2'||viewValue=='D3'||viewValue=='D4'||viewValue=='D5'
        			||viewValue=='D6'||viewValue=='D7'||viewValue=='D8'||viewValue=='D9'||viewValue=='D10'||viewValue=='D11'
        			||viewValue=='D12'||viewValue=='D13'||viewValue=='D14'||viewValue=='D15'||viewValue=='D16'||viewValue=='D17'
        			||viewValue=='D18'||viewValue=='SR1'||viewValue=='SR2'||viewValue=='SR3'||viewValue=='SR4'||viewValue=='SR5'
        			||viewValue=='SR6'||viewValue=='SR7'||viewValue=='SR8'||viewValue=='SR9'||viewValue=='SR10'||viewValue=='SR11'
        			||viewValue=='SR12'||viewValue=='SR13'||viewValue=='SR14'||viewValue=='SR15'||viewValue=='SR16'||viewValue=='SR17'
        			||viewValue=='SR18'||viewValue=='SR19'||viewValue=='SR20'||viewValue=='SR21'||viewValue=='SR22'||viewValue=='SR23'
        			||viewValue=='SR24'||viewValue=='SR25'||viewValue=='SR26'||viewValue=='SR27'||viewValue=='SR28'||viewValue=='SR29'
        			||viewValue=='SR30'||viewValue=='SR31'||viewValue=='SR32'||viewValue=='SR33'||viewValue=='SR34'||viewValue=='SR35'
        			||viewValue=='SR36'||viewValue=='SR37'||viewValue=='SR38'||viewValue=='SR39'||viewValue=='SR40'||viewValue=='SR41'
        			||viewValue=='SR42'||viewValue=='SR43'||viewValue=='L1'||viewValue=='L2'||viewValue=='L3'||viewValue=='L4'
        			||viewValue=='L5'||viewValue=='L6'||viewValue=='L7'||viewValue=='L8'||viewValue=='L9'||viewValue=='L10'
        			||viewValue=='L11'||viewValue=='L12'||viewValue=='L13'||viewValue=='L14'||viewValue=='L15'||viewValue=='L16'
        			||viewValue=='L17'||viewValue=='L18'||viewValue=='L19'||viewValue=='L20'||viewValue=='L21'||viewValue=='L22'
        			||viewValue=='L23'||viewValue=='L24'||viewValue=='L25'||viewValue=='L26'||viewValue=='L27'||viewValue=='L28') {
        			return true;
        		}
        		else {
        			return false;
        		}
        	};
        }
	};
});


})();
