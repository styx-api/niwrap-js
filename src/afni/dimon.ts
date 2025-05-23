// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DIMON_METADATA: Metadata = {
    id: "c892c771a45028c51f21626d1cce300d014da2d2.boutiques",
    name: "Dimon",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface DimonParameters {
    "__STYXTYPE__": "Dimon";
    "infile_prefix": string;
    "infile_pattern"?: string | null | undefined;
    "infile_list"?: InputPathType | null | undefined;
    "rt_cmd"?: string | null | undefined;
    "host"?: string | null | undefined;
    "drive_afni"?: string | null | undefined;
    "drive_wait"?: string | null | undefined;
    "te_list"?: string | null | undefined;
    "sort_method"?: string | null | undefined;
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
        "Dimon": dimon_cargs,
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
        "Dimon": dimon_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `dimon(...)`.
 *
 * @interface
 */
interface DimonOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Sorted input files with specified prefix
     */
    sorted_files: OutputPathType;
    /**
     * Details about sorted files
     */
    sorted_files_details: OutputPathType | null;
}


function dimon_params(
    infile_prefix: string,
    infile_pattern: string | null = null,
    infile_list: InputPathType | null = null,
    rt_cmd: string | null = null,
    host: string | null = null,
    drive_afni: string | null = null,
    drive_wait: string | null = null,
    te_list: string | null = null,
    sort_method: string | null = null,
): DimonParameters {
    /**
     * Build parameters.
    
     * @param infile_prefix Prefix matching input files
     * @param infile_pattern Pattern for input files
     * @param infile_list List of filenames
     * @param rt_cmd Send COMMAND(s) to realtime plugin
     * @param host Specify the host for afni communication
     * @param drive_afni Send 'drive afni' command, CMND
     * @param drive_wait Send delayed 'drive afni' command, CMND
     * @param te_list Specify a list of echo times
     * @param sort_method Apply sorting method to image structures
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "Dimon" as const,
        "infile_prefix": infile_prefix,
    };
    if (infile_pattern !== null) {
        params["infile_pattern"] = infile_pattern;
    }
    if (infile_list !== null) {
        params["infile_list"] = infile_list;
    }
    if (rt_cmd !== null) {
        params["rt_cmd"] = rt_cmd;
    }
    if (host !== null) {
        params["host"] = host;
    }
    if (drive_afni !== null) {
        params["drive_afni"] = drive_afni;
    }
    if (drive_wait !== null) {
        params["drive_wait"] = drive_wait;
    }
    if (te_list !== null) {
        params["te_list"] = te_list;
    }
    if (sort_method !== null) {
        params["sort_method"] = sort_method;
    }
    return params;
}


function dimon_cargs(
    params: DimonParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("Dimon");
    cargs.push(
        "-infile_prefix",
        (params["infile_prefix"] ?? null)
    );
    if ((params["infile_pattern"] ?? null) !== null) {
        cargs.push(
            "-infile_pattern",
            (params["infile_pattern"] ?? null)
        );
    }
    if ((params["infile_list"] ?? null) !== null) {
        cargs.push(
            "-infile_list",
            execution.inputFile((params["infile_list"] ?? null))
        );
    }
    if ((params["rt_cmd"] ?? null) !== null) {
        cargs.push(
            "-rt_cmd",
            (params["rt_cmd"] ?? null)
        );
    }
    if ((params["host"] ?? null) !== null) {
        cargs.push(
            "-host",
            (params["host"] ?? null)
        );
    }
    if ((params["drive_afni"] ?? null) !== null) {
        cargs.push(
            "-drive_afni",
            (params["drive_afni"] ?? null)
        );
    }
    if ((params["drive_wait"] ?? null) !== null) {
        cargs.push(
            "-drive_wait",
            (params["drive_wait"] ?? null)
        );
    }
    if ((params["te_list"] ?? null) !== null) {
        cargs.push(
            "-te_list",
            (params["te_list"] ?? null)
        );
    }
    if ((params["sort_method"] ?? null) !== null) {
        cargs.push(
            "-sort_method",
            (params["sort_method"] ?? null)
        );
    }
    return cargs;
}


function dimon_outputs(
    params: DimonParameters,
    execution: Execution,
): DimonOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DimonOutputs = {
        root: execution.outputFile("."),
        sorted_files: execution.outputFile([(params["infile_prefix"] ?? null), "*"].join('')),
        sorted_files_details: ((params["infile_list"] ?? null) !== null) ? execution.outputFile([path.basename((params["infile_list"] ?? null)), "_details"].join('')) : null,
    };
    return ret;
}


function dimon_execute(
    params: DimonParameters,
    execution: Execution,
): DimonOutputs {
    /**
     * Monitor real-time acquisition of DICOM image files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DimonOutputs`).
     */
    params = execution.params(params)
    const cargs = dimon_cargs(params, execution)
    const ret = dimon_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dimon(
    infile_prefix: string,
    infile_pattern: string | null = null,
    infile_list: InputPathType | null = null,
    rt_cmd: string | null = null,
    host: string | null = null,
    drive_afni: string | null = null,
    drive_wait: string | null = null,
    te_list: string | null = null,
    sort_method: string | null = null,
    runner: Runner | null = null,
): DimonOutputs {
    /**
     * Monitor real-time acquisition of DICOM image files.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param infile_prefix Prefix matching input files
     * @param infile_pattern Pattern for input files
     * @param infile_list List of filenames
     * @param rt_cmd Send COMMAND(s) to realtime plugin
     * @param host Specify the host for afni communication
     * @param drive_afni Send 'drive afni' command, CMND
     * @param drive_wait Send delayed 'drive afni' command, CMND
     * @param te_list Specify a list of echo times
     * @param sort_method Apply sorting method to image structures
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DimonOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DIMON_METADATA);
    const params = dimon_params(infile_prefix, infile_pattern, infile_list, rt_cmd, host, drive_afni, drive_wait, te_list, sort_method)
    return dimon_execute(params, execution);
}


export {
      DIMON_METADATA,
      DimonOutputs,
      DimonParameters,
      dimon,
      dimon_params,
};
