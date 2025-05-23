// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_APARC2WMSEG_METADATA: Metadata = {
    id: "87041c67737f5fcea13d8a9bfb01ff795c1c95a2.boutiques",
    name: "mri_aparc2wmseg",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriAparc2wmsegParameters {
    "__STYXTYPE__": "mri_aparc2wmseg";
    "subject": string;
    "wmseg_file": string;
    "help": boolean;
    "version": boolean;
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
        "mri_aparc2wmseg": mri_aparc2wmseg_cargs,
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
 * Output object returned when calling `mri_aparc2wmseg(...)`.
 *
 * @interface
 */
interface MriAparc2wmsegOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function mri_aparc2wmseg_params(
    subject: string,
    wmseg_file: string,
    help: boolean = false,
    version: boolean = false,
): MriAparc2wmsegParameters {
    /**
     * Build parameters.
    
     * @param subject The subject identifier used in FreeSurfer.
     * @param wmseg_file File to store the output white matter segmentation.
     * @param help Print out information on how to use this program.
     * @param version Print out version and exit.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_aparc2wmseg" as const,
        "subject": subject,
        "wmseg_file": wmseg_file,
        "help": help,
        "version": version,
    };
    return params;
}


function mri_aparc2wmseg_cargs(
    params: MriAparc2wmsegParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_aparc2wmseg");
    cargs.push(
        "--s",
        (params["subject"] ?? null)
    );
    cargs.push(
        "--wmseg",
        (params["wmseg_file"] ?? null)
    );
    if ((params["help"] ?? null)) {
        cargs.push("--help");
    }
    if ((params["version"] ?? null)) {
        cargs.push("--version");
    }
    return cargs;
}


function mri_aparc2wmseg_outputs(
    params: MriAparc2wmsegParameters,
    execution: Execution,
): MriAparc2wmsegOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriAparc2wmsegOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function mri_aparc2wmseg_execute(
    params: MriAparc2wmsegParameters,
    execution: Execution,
): MriAparc2wmsegOutputs {
    /**
     * A tool to convert aparc+aseg.mgz annotations into a white matter segmentation file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriAparc2wmsegOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_aparc2wmseg_cargs(params, execution)
    const ret = mri_aparc2wmseg_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_aparc2wmseg(
    subject: string,
    wmseg_file: string,
    help: boolean = false,
    version: boolean = false,
    runner: Runner | null = null,
): MriAparc2wmsegOutputs {
    /**
     * A tool to convert aparc+aseg.mgz annotations into a white matter segmentation file.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subject The subject identifier used in FreeSurfer.
     * @param wmseg_file File to store the output white matter segmentation.
     * @param help Print out information on how to use this program.
     * @param version Print out version and exit.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriAparc2wmsegOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_APARC2WMSEG_METADATA);
    const params = mri_aparc2wmseg_params(subject, wmseg_file, help, version)
    return mri_aparc2wmseg_execute(params, execution);
}


export {
      MRI_APARC2WMSEG_METADATA,
      MriAparc2wmsegOutputs,
      MriAparc2wmsegParameters,
      mri_aparc2wmseg,
      mri_aparc2wmseg_params,
};
