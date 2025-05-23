// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const DCMEDIT_METADATA: Metadata = {
    id: "8cde5cf6f19725e4d438d7089e7f5a9e71f0b93d.boutiques",
    name: "dcmedit",
    package: "mrtrix",
    container_image_tag: "mrtrix3/mrtrix3:3.0.4",
};


interface DcmeditTagParameters {
    "__STYXTYPE__": "tag";
    "group": string;
    "element": string;
    "newvalue": string;
}


interface DcmeditConfigParameters {
    "__STYXTYPE__": "config";
    "key": string;
    "value": string;
}


interface DcmeditParameters {
    "__STYXTYPE__": "dcmedit";
    "anonymise": boolean;
    "id"?: string | null | undefined;
    "tag"?: Array<DcmeditTagParameters> | null | undefined;
    "info": boolean;
    "quiet": boolean;
    "debug": boolean;
    "force": boolean;
    "nthreads"?: number | null | undefined;
    "config"?: Array<DcmeditConfigParameters> | null | undefined;
    "help": boolean;
    "version": boolean;
    "file": InputPathType;
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
        "dcmedit": dcmedit_cargs,
        "tag": dcmedit_tag_cargs,
        "config": dcmedit_config_cargs,
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


function dcmedit_tag_params(
    group: string,
    element: string,
    newvalue: string,
): DcmeditTagParameters {
    /**
     * Build parameters.
    
     * @param group replace specific tag.
     * @param element replace specific tag.
     * @param newvalue replace specific tag.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tag" as const,
        "group": group,
        "element": element,
        "newvalue": newvalue,
    };
    return params;
}


function dcmedit_tag_cargs(
    params: DcmeditTagParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-tag");
    cargs.push((params["group"] ?? null));
    cargs.push((params["element"] ?? null));
    cargs.push((params["newvalue"] ?? null));
    return cargs;
}


function dcmedit_config_params(
    key: string,
    value: string,
): DcmeditConfigParameters {
    /**
     * Build parameters.
    
     * @param key temporarily set the value of an MRtrix config file entry.
     * @param value temporarily set the value of an MRtrix config file entry.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "config" as const,
        "key": key,
        "value": value,
    };
    return params;
}


function dcmedit_config_cargs(
    params: DcmeditConfigParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("-config");
    cargs.push((params["key"] ?? null));
    cargs.push((params["value"] ?? null));
    return cargs;
}


/**
 * Output object returned when calling `dcmedit(...)`.
 *
 * @interface
 */
interface DcmeditOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function dcmedit_params(
    file: InputPathType,
    anonymise: boolean = false,
    id: string | null = null,
    tag: Array<DcmeditTagParameters> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<DcmeditConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
): DcmeditParameters {
    /**
     * Build parameters.
    
     * @param file the DICOM file to be edited.
     * @param anonymise remove any identifiable information, by replacing the following tags:
- any tag with Value Representation PN will be replaced with 'anonymous'
- tag (0010,0030) PatientBirthDate will be replaced with an empty string
WARNING: there is no guarantee that this command will remove all identiable information, since such information may be contained in any number of private vendor-specific tags. You will need to double-check the results independently if you need to ensure anonymity.
     * @param id replace all ID tags with string supplied. This consists of tags (0010, 0020) PatientID and (0010, 1000) OtherPatientIDs
     * @param tag replace specific tag.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "dcmedit" as const,
        "anonymise": anonymise,
        "info": info,
        "quiet": quiet,
        "debug": debug,
        "force": force,
        "help": help,
        "version": version,
        "file": file,
    };
    if (id !== null) {
        params["id"] = id;
    }
    if (tag !== null) {
        params["tag"] = tag;
    }
    if (nthreads !== null) {
        params["nthreads"] = nthreads;
    }
    if (config !== null) {
        params["config"] = config;
    }
    return params;
}


function dcmedit_cargs(
    params: DcmeditParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("dcmedit");
    if ((params["anonymise"] ?? null)) {
        cargs.push("-anonymise");
    }
    if ((params["id"] ?? null) !== null) {
        cargs.push(
            "-id",
            (params["id"] ?? null)
        );
    }
    if ((params["tag"] ?? null) !== null) {
        cargs.push(...(params["tag"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["info"] ?? null)) {
        cargs.push("-info");
    }
    if ((params["quiet"] ?? null)) {
        cargs.push("-quiet");
    }
    if ((params["debug"] ?? null)) {
        cargs.push("-debug");
    }
    if ((params["force"] ?? null)) {
        cargs.push("-force");
    }
    if ((params["nthreads"] ?? null) !== null) {
        cargs.push(
            "-nthreads",
            String((params["nthreads"] ?? null))
        );
    }
    if ((params["config"] ?? null) !== null) {
        cargs.push(...(params["config"] ?? null).map(s => dynCargs(s.__STYXTYPE__)(s, execution)).flat());
    }
    if ((params["help"] ?? null)) {
        cargs.push("-help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("-version");
    }
    cargs.push(execution.inputFile((params["file"] ?? null)));
    return cargs;
}


function dcmedit_outputs(
    params: DcmeditParameters,
    execution: Execution,
): DcmeditOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: DcmeditOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function dcmedit_execute(
    params: DcmeditParameters,
    execution: Execution,
): DcmeditOutputs {
    /**
     * Edit DICOM file in-place.
     * 
     * Note that this command simply replaces the existing values without modifying the DICOM structure in any way. Replacement text will be truncated if it is too long to fit inside the existing tag.
     * 
     * WARNING: this command will modify existing data! It is recommended to run this command on a copy of the original data set to avoid loss of data.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `DcmeditOutputs`).
     */
    params = execution.params(params)
    const cargs = dcmedit_cargs(params, execution)
    const ret = dcmedit_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function dcmedit(
    file: InputPathType,
    anonymise: boolean = false,
    id: string | null = null,
    tag: Array<DcmeditTagParameters> | null = null,
    info: boolean = false,
    quiet: boolean = false,
    debug: boolean = false,
    force: boolean = false,
    nthreads: number | null = null,
    config: Array<DcmeditConfigParameters> | null = null,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): DcmeditOutputs {
    /**
     * Edit DICOM file in-place.
     * 
     * Note that this command simply replaces the existing values without modifying the DICOM structure in any way. Replacement text will be truncated if it is too long to fit inside the existing tag.
     * 
     * WARNING: this command will modify existing data! It is recommended to run this command on a copy of the original data set to avoid loss of data.
     * 
     * References:
     * 
     * .
     * 
     * Author: MRTrix3 Developers
     * 
     * URL: https://www.mrtrix.org/
    
     * @param file the DICOM file to be edited.
     * @param anonymise remove any identifiable information, by replacing the following tags:
- any tag with Value Representation PN will be replaced with 'anonymous'
- tag (0010,0030) PatientBirthDate will be replaced with an empty string
WARNING: there is no guarantee that this command will remove all identiable information, since such information may be contained in any number of private vendor-specific tags. You will need to double-check the results independently if you need to ensure anonymity.
     * @param id replace all ID tags with string supplied. This consists of tags (0010, 0020) PatientID and (0010, 1000) OtherPatientIDs
     * @param tag replace specific tag.
     * @param info display information messages.
     * @param quiet do not display information messages or progress status; alternatively, this can be achieved by setting the MRTRIX_QUIET environment variable to a non-empty string.
     * @param debug display debugging messages.
     * @param force force overwrite of output files (caution: using the same file as input and output might cause unexpected behaviour).
     * @param nthreads use this number of threads in multi-threaded applications (set to 0 to disable multi-threading).
     * @param config temporarily set the value of an MRtrix config file entry.
     * @param help display this information page and exit.
     * @param version display version information and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `DcmeditOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(DCMEDIT_METADATA);
    const params = dcmedit_params(file, anonymise, id, tag, info, quiet, debug, force, nthreads, config, help, version)
    return dcmedit_execute(params, execution);
}


export {
      DCMEDIT_METADATA,
      DcmeditConfigParameters,
      DcmeditOutputs,
      DcmeditParameters,
      DcmeditTagParameters,
      dcmedit,
      dcmedit_config_params,
      dcmedit_params,
      dcmedit_tag_params,
};
