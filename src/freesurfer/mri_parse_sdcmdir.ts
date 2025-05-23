// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_PARSE_SDCMDIR_METADATA: Metadata = {
    id: "da51e5d5af342cf720bb1d988d04c5f9f98e067a.boutiques",
    name: "mri_parse_sdcmdir",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriParseSdcmdirParameters {
    "__STYXTYPE__": "mri_parse_sdcmdir";
    "sdicomdir": string;
    "outfile"?: string | null | undefined;
    "sortbyrun": boolean;
    "summarize": boolean;
    "dwi": boolean;
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
        "mri_parse_sdcmdir": mri_parse_sdcmdir_cargs,
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
 * Output object returned when calling `mri_parse_sdcmdir(...)`.
 *
 * @interface
 */
interface MriParseSdcmdirOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_parse_sdcmdir_params(
    sdicomdir: string,
    outfile: string | null = null,
    sortbyrun: boolean = false,
    summarize: boolean = false,
    dwi: boolean = false,
): MriParseSdcmdirParameters {
    /**
     * Build parameters.
    
     * @param sdicomdir Path to Siemens DICOM directory
     * @param outfile Name of a file to which the results will be printed. If unspecified, the results will be printed to stdout.
     * @param sortbyrun Assign run numbers
     * @param summarize Only print out info for run leaders
     * @param dwi Try to read DWI params. Generally no need to.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_parse_sdcmdir" as const,
        "sdicomdir": sdicomdir,
        "sortbyrun": sortbyrun,
        "summarize": summarize,
        "dwi": dwi,
    };
    if (outfile !== null) {
        params["outfile"] = outfile;
    }
    return params;
}


function mri_parse_sdcmdir_cargs(
    params: MriParseSdcmdirParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_parse_sdcmdir");
    cargs.push(
        "--d",
        (params["sdicomdir"] ?? null)
    );
    if ((params["outfile"] ?? null) !== null) {
        cargs.push(
            "--o",
            (params["outfile"] ?? null)
        );
    }
    if ((params["sortbyrun"] ?? null)) {
        cargs.push("--sortbyrun");
    }
    if ((params["summarize"] ?? null)) {
        cargs.push("--summarize");
    }
    if ((params["dwi"] ?? null)) {
        cargs.push("--dwi");
    }
    return cargs;
}


function mri_parse_sdcmdir_outputs(
    params: MriParseSdcmdirParameters,
    execution: Execution,
): MriParseSdcmdirOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriParseSdcmdirOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_parse_sdcmdir_execute(
    params: MriParseSdcmdirParameters,
    execution: Execution,
): MriParseSdcmdirOutputs {
    /**
     * This program parses the Siemens DICOM files in a given directory and prints out information about each file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriParseSdcmdirOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_parse_sdcmdir_cargs(params, execution)
    const ret = mri_parse_sdcmdir_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_parse_sdcmdir(
    sdicomdir: string,
    outfile: string | null = null,
    sortbyrun: boolean = false,
    summarize: boolean = false,
    dwi: boolean = false,
    runner: Runner | null = null,
): MriParseSdcmdirOutputs {
    /**
     * This program parses the Siemens DICOM files in a given directory and prints out information about each file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param sdicomdir Path to Siemens DICOM directory
     * @param outfile Name of a file to which the results will be printed. If unspecified, the results will be printed to stdout.
     * @param sortbyrun Assign run numbers
     * @param summarize Only print out info for run leaders
     * @param dwi Try to read DWI params. Generally no need to.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriParseSdcmdirOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_PARSE_SDCMDIR_METADATA);
    const params = mri_parse_sdcmdir_params(sdicomdir, outfile, sortbyrun, summarize, dwi)
    return mri_parse_sdcmdir_execute(params, execution);
}


export {
      MRI_PARSE_SDCMDIR_METADATA,
      MriParseSdcmdirOutputs,
      MriParseSdcmdirParameters,
      mri_parse_sdcmdir,
      mri_parse_sdcmdir_params,
};
