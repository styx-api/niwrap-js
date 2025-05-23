// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const NIML_FEEDME_METADATA: Metadata = {
    id: "045d80f46fa43e5a4d550a5bf8daeb0c433c5c4f.boutiques",
    name: "niml_feedme",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface NimlFeedmeParameters {
    "__STYXTYPE__": "niml_feedme";
    "host"?: string | null | undefined;
    "interval"?: number | null | undefined;
    "verbose": boolean;
    "accum": boolean;
    "target_dataset"?: string | null | undefined;
    "drive_cmds"?: Array<string> | null | undefined;
    "dataset": InputPathType;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "niml_feedme": niml_feedme_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `niml_feedme(...)`.
 *
 * @interface
 */
interface NimlFeedmeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function niml_feedme_params(
    dataset: InputPathType,
    host: string | null = null,
    interval: number | null = null,
    verbose: boolean = false,
    accum: boolean = false,
    target_dataset: string | null = null,
    drive_cmds: Array<string> | null = null,
): NimlFeedmeParameters {
    /**
     * Build parameters.
    
     * @param dataset Input dataset to be sent to AFNI.
     * @param host Send data, via TCP/IP, to AFNI running on the computer system 'sname'. By default, uses the current system (localhost), if you don't use this option.
     * @param interval Tries to maintain an inter-transmit interval of 'ms' milliseconds. The default is 1000 msec per volume.
     * @param verbose Be (very) talkative about actions.
     * @param accum Send sub-bricks so that they accumulate in AFNI. The default is to create only a 1 volume dataset inside AFNI, and each sub-brick just replaces that one volume when it is received.
     * @param target_dataset Change the dataset name transmitted to AFNI from 'niml_feedme' to 'nam'.
     * @param drive_cmds Send 'cmd' as a DRIVE_AFNI command. If cmd contains blanks, it must be in 'quotes'. Multiple -drive options may be used. These commands will be sent to AFNI just after the first volume is transmitted. See file README.driver for a list of commands.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "niml_feedme" as const,
        "verbose": verbose,
        "accum": accum,
        "dataset": dataset,
    };
    if (host !== null) {
        params["host"] = host;
    }
    if (interval !== null) {
        params["interval"] = interval;
    }
    if (target_dataset !== null) {
        params["target_dataset"] = target_dataset;
    }
    if (drive_cmds !== null) {
        params["drive_cmds"] = drive_cmds;
    }
    return params;
}


function niml_feedme_cargs(
    params: NimlFeedmeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("niml_feedme");
    if ((params["host"] ?? null) !== null) {
        cargs.push(
            "-host",
            (params["host"] ?? null)
        );
    }
    if ((params["interval"] ?? null) !== null) {
        cargs.push(
            "-dt",
            String((params["interval"] ?? null))
        );
    }
    if ((params["verbose"] ?? null)) {
        cargs.push("-verb");
    }
    if ((params["accum"] ?? null)) {
        cargs.push("-accum");
    }
    if ((params["target_dataset"] ?? null) !== null) {
        cargs.push(
            "-target",
            (params["target_dataset"] ?? null)
        );
    }
    if ((params["drive_cmds"] ?? null) !== null) {
        cargs.push(
            "-drive",
            ...(params["drive_cmds"] ?? null)
        );
    }
    cargs.push(execution.inputFile((params["dataset"] ?? null)));
    return cargs;
}


function niml_feedme_outputs(
    params: NimlFeedmeParameters,
    execution: Execution,
): NimlFeedmeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: NimlFeedmeOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function niml_feedme_execute(
    params: NimlFeedmeParameters,
    execution: Execution,
): NimlFeedmeOutputs {
    /**
     * Sends volumes from the dataset to AFNI via the NIML socket interface.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `NimlFeedmeOutputs`).
     */
    params = execution.params(params)
    const cargs = niml_feedme_cargs(params, execution)
    const ret = niml_feedme_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function niml_feedme(
    dataset: InputPathType,
    host: string | null = null,
    interval: number | null = null,
    verbose: boolean = false,
    accum: boolean = false,
    target_dataset: string | null = null,
    drive_cmds: Array<string> | null = null,
    runner: Runner | null = null,
): NimlFeedmeOutputs {
    /**
     * Sends volumes from the dataset to AFNI via the NIML socket interface.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param dataset Input dataset to be sent to AFNI.
     * @param host Send data, via TCP/IP, to AFNI running on the computer system 'sname'. By default, uses the current system (localhost), if you don't use this option.
     * @param interval Tries to maintain an inter-transmit interval of 'ms' milliseconds. The default is 1000 msec per volume.
     * @param verbose Be (very) talkative about actions.
     * @param accum Send sub-bricks so that they accumulate in AFNI. The default is to create only a 1 volume dataset inside AFNI, and each sub-brick just replaces that one volume when it is received.
     * @param target_dataset Change the dataset name transmitted to AFNI from 'niml_feedme' to 'nam'.
     * @param drive_cmds Send 'cmd' as a DRIVE_AFNI command. If cmd contains blanks, it must be in 'quotes'. Multiple -drive options may be used. These commands will be sent to AFNI just after the first volume is transmitted. See file README.driver for a list of commands.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `NimlFeedmeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(NIML_FEEDME_METADATA);
    const params = niml_feedme_params(dataset, host, interval, verbose, accum, target_dataset, drive_cmds)
    return niml_feedme_execute(params, execution);
}


export {
      NIML_FEEDME_METADATA,
      NimlFeedmeOutputs,
      NimlFeedmeParameters,
      niml_feedme,
      niml_feedme_params,
};
