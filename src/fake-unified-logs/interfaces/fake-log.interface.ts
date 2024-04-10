export interface FakeLog {
  EAI_LOG: {
    EAI_LOG_HEADER: {
      START_TIME_ORIGIN: string;
      ENDTIME: string;
      NCODE: string;
      ISERROR: boolean;
      USERNAME: string;
      STARTTIME: string;
      COUNTRY_CODE: string;
      HOSTNAME: string;
      TRACKINGID: string;
      ECODE: string;
      ACTION: string;
      SYSTEM_FUNCTION_VERSION: number;
      APPLICATION: string;
      TYPE: string;
      START_TIME_SITE: string;
      STATUS_RESP: string;
      VER_SR: string;
      COMPONENT: string;
      STEP: number;
      EDESCRIPTION: string;
      COMMENTS: string;
      HAS_DEBUG: string;
      DATACENTER_SITE: string;
      NDESCRIPTION: string;
      SYSTEM_STEP_RETRY: number;
      EXTERNAL_TRACKING_ID: string;
      CENTRAL_LOG_SYSTEM_ID: string;
      DOMAIN: string;
      OUT_SLA: number;
      SERVICE: string;
      DURATION: number;
    };
    EAI_LOG_KEYS_GROUPS: {
      EAI_LOG_KEYS: {
        Header_History_domain: string;
      };
    };
    EAI_LOG_DEBUG: {
      SYSTEM_STEP_END_MSG_TYPE: string;
      STARTMSG: string;
      ENDMSG: string;
      SYSTEM_STEP_START_MSG_TYPE: string;
    };
  };
}
