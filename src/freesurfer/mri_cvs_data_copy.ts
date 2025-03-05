// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_CVS_DATA_COPY_METADATA: Metadata = {
    id: "b73336351ee9c11ffda39c6ee8b2af17a54695d1.boutiques",
    name: "mri_cvs_data_copy",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriCvsDataCopyParameters {
    "__STYXTYPE__": "mri_cvs_data_copy";
    "subjid": string;
    "olddir": string;
    "newdir": string;
    "version": boolean;
    "help": boolean;
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
        "mri_cvs_data_copy": mri_cvs_data_copy_cargs,
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
 * Output object returned when calling `mri_cvs_data_copy(...)`.
 *
 * @interface
 */
interface MriCvsDataCopyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_cvs_data_copy_params(
    subjid: string,
    olddir: string,
    newdir: string,
    version: boolean = false,
    help: boolean = false,
): MriCvsDataCopyParameters {
    /**
     * Build parameters.
    
     * @param subjid Subject ID of the subject to be moved/registered.
     * @param olddir Directory where data (FS reconned output files for the subject) is currently located. Use full path.
     * @param newdir Directory where data (FS reconned output files for the subject) should be moved to. Use full path.
     * @param version Print version and exit.
     * @param help Print help and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_cvs_data_copy" as const,
        "subjid": subjid,
        "olddir": olddir,
        "newdir": newdir,
        "version": version,
        "help": help,
    };
    return params;
}


function mri_cvs_data_copy_cargs(
    params: MriCvsDataCopyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_cvs_data_copy");
    cargs.push(
        "--subjid",
        (params["subjid"] ?? null)
    );
    cargs.push(
        "--olddir",
        (params["olddir"] ?? null)
    );
    cargs.push(
        "--newdir",
        (params["newdir"] ?? null)
    );
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    return cargs;
}


function mri_cvs_data_copy_outputs(
    params: MriCvsDataCopyParameters,
    execution: Execution,
): MriCvsDataCopyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriCvsDataCopyOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_cvs_data_copy_execute(
    params: MriCvsDataCopyParameters,
    execution: Execution,
): MriCvsDataCopyOutputs {
    /**
     * Packs and copies files that are required for mri_cvs_register.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriCvsDataCopyOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_cvs_data_copy_cargs(params, execution)
    const ret = mri_cvs_data_copy_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_cvs_data_copy(
    subjid: string,
    olddir: string,
    newdir: string,
    version: boolean = false,
    help: boolean = false,
    runner: Runner | null = null,
): MriCvsDataCopyOutputs {
    /**
     * Packs and copies files that are required for mri_cvs_register.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subjid Subject ID of the subject to be moved/registered.
     * @param olddir Directory where data (FS reconned output files for the subject) is currently located. Use full path.
     * @param newdir Directory where data (FS reconned output files for the subject) should be moved to. Use full path.
     * @param version Print version and exit.
     * @param help Print help and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriCvsDataCopyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_CVS_DATA_COPY_METADATA);
    const params = mri_cvs_data_copy_params(subjid, olddir, newdir, version, help)
    return mri_cvs_data_copy_execute(params, execution);
}


export {
      MRI_CVS_DATA_COPY_METADATA,
      MriCvsDataCopyOutputs,
      MriCvsDataCopyParameters,
      mri_cvs_data_copy,
      mri_cvs_data_copy_params,
};
