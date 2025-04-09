// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FIXUP_MNI_PATHS_METADATA: Metadata = {
    id: "c3f882d4801a38a0ebe1d369afcdd5e436615473.boutiques",
    name: "fixup_mni_paths",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface FixupMniPathsParameters {
    "__STYXTYPE__": "fixup_mni_paths";
    "verbose": boolean;
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
        "fixup_mni_paths": fixup_mni_paths_cargs,
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
        "fixup_mni_paths": fixup_mni_paths_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `fixup_mni_paths(...)`.
 *
 * @interface
 */
interface FixupMniPathsOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Original file backup for autocrop
     */
    autocrop_backup: OutputPathType;
    /**
     * Original file backup for field2imp
     */
    field2imp_backup: OutputPathType;
    /**
     * Original file backup for imp2field
     */
    imp2field_backup: OutputPathType;
    /**
     * Original file backup for make_template
     */
    make_template_backup: OutputPathType;
    /**
     * Original file backup for mritoself
     */
    mritoself_backup: OutputPathType;
    /**
     * Original file backup for mritotal
     */
    mritotal_backup: OutputPathType;
    /**
     * Original file backup for nu_correct
     */
    nu_correct_backup: OutputPathType;
    /**
     * Original file backup for nu_estimate
     */
    nu_estimate_backup: OutputPathType;
    /**
     * Original file backup for nu_estimate_np_and_em
     */
    nu_estimate_np_and_em_backup: OutputPathType;
    /**
     * Original file backup for nu_evaluate
     */
    nu_evaluate_backup: OutputPathType;
    /**
     * Original file backup for resample_labels
     */
    resample_labels_backup: OutputPathType;
    /**
     * Original file backup for sharpen_volume
     */
    sharpen_volume_backup: OutputPathType;
    /**
     * Original file backup for xfmtool
     */
    xfmtool_backup: OutputPathType;
}


function fixup_mni_paths_params(
    verbose: boolean = false,
): FixupMniPathsParameters {
    /**
     * Build parameters.
    
     * @param verbose Provide verbose output during the patch process
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "fixup_mni_paths" as const,
        "verbose": verbose,
    };
    return params;
}


function fixup_mni_paths_cargs(
    params: FixupMniPathsParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("fixup_mni_paths");
    if ((params["verbose"] ?? null)) {
        cargs.push("-v");
    }
    return cargs;
}


function fixup_mni_paths_outputs(
    params: FixupMniPathsParameters,
    execution: Execution,
): FixupMniPathsOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FixupMniPathsOutputs = {
        root: execution.outputFile("."),
        autocrop_backup: execution.outputFile(["autocrop.old"].join('')),
        field2imp_backup: execution.outputFile(["field2imp.old"].join('')),
        imp2field_backup: execution.outputFile(["imp2field.old"].join('')),
        make_template_backup: execution.outputFile(["make_template.old"].join('')),
        mritoself_backup: execution.outputFile(["mritoself.old"].join('')),
        mritotal_backup: execution.outputFile(["mritotal.old"].join('')),
        nu_correct_backup: execution.outputFile(["nu_correct.old"].join('')),
        nu_estimate_backup: execution.outputFile(["nu_estimate.old"].join('')),
        nu_estimate_np_and_em_backup: execution.outputFile(["nu_estimate_np_and_em.old"].join('')),
        nu_evaluate_backup: execution.outputFile(["nu_evaluate.old"].join('')),
        resample_labels_backup: execution.outputFile(["resample_labels.old"].join('')),
        sharpen_volume_backup: execution.outputFile(["sharpen_volume.old"].join('')),
        xfmtool_backup: execution.outputFile(["xfmtool.old"].join('')),
    };
    return ret;
}


function fixup_mni_paths_execute(
    params: FixupMniPathsParameters,
    execution: Execution,
): FixupMniPathsOutputs {
    /**
     * A utility for patching MNI tools to ensure correct paths are used.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FixupMniPathsOutputs`).
     */
    params = execution.params(params)
    const cargs = fixup_mni_paths_cargs(params, execution)
    const ret = fixup_mni_paths_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function fixup_mni_paths(
    verbose: boolean = false,
    runner: Runner | null = null,
): FixupMniPathsOutputs {
    /**
     * A utility for patching MNI tools to ensure correct paths are used.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param verbose Provide verbose output during the patch process
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FixupMniPathsOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FIXUP_MNI_PATHS_METADATA);
    const params = fixup_mni_paths_params(verbose)
    return fixup_mni_paths_execute(params, execution);
}


export {
      FIXUP_MNI_PATHS_METADATA,
      FixupMniPathsOutputs,
      FixupMniPathsParameters,
      fixup_mni_paths,
      fixup_mni_paths_params,
};
