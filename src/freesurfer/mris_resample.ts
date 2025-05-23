// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRIS_RESAMPLE_METADATA: Metadata = {
    id: "33f6025deb7a5ce712fd1bc0d45af2a272896018.boutiques",
    name: "mris_resample",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MrisResampleParameters {
    "__STYXTYPE__": "mris_resample";
    "atlas_reg": InputPathType;
    "subject_reg": InputPathType;
    "subject_surf": InputPathType;
    "output": string;
    "annot_in"?: InputPathType | null | undefined;
    "annot_out"?: string | null | undefined;
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
        "mris_resample": mris_resample_cargs,
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
        "mris_resample": mris_resample_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mris_resample(...)`.
 *
 * @interface
 */
interface MrisResampleOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Resampled surface output
     */
    resampled_surface_output: OutputPathType;
    /**
     * Output annotation for the resampled atlas
     */
    resampled_annotation_output: OutputPathType | null;
}


function mris_resample_params(
    atlas_reg: InputPathType,
    subject_reg: InputPathType,
    subject_surf: InputPathType,
    output: string,
    annot_in: InputPathType | null = null,
    annot_out: string | null = null,
): MrisResampleParameters {
    /**
     * Build parameters.
    
     * @param atlas_reg Atlas spherical registration file.
     * @param subject_reg Subject spherical registration file.
     * @param subject_surf Subject actual surface.
     * @param output Output resampled surface.
     * @param annot_in Input annotation (for the subject). If present, output annotation must be present as well.
     * @param annot_out Output annotation (for the resampled atlas). If present, input annotation must be present as well.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mris_resample" as const,
        "atlas_reg": atlas_reg,
        "subject_reg": subject_reg,
        "subject_surf": subject_surf,
        "output": output,
    };
    if (annot_in !== null) {
        params["annot_in"] = annot_in;
    }
    if (annot_out !== null) {
        params["annot_out"] = annot_out;
    }
    return params;
}


function mris_resample_cargs(
    params: MrisResampleParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mris_resample");
    cargs.push(
        "-atlas_reg",
        execution.inputFile((params["atlas_reg"] ?? null))
    );
    cargs.push(
        "-subject_reg",
        execution.inputFile((params["subject_reg"] ?? null))
    );
    cargs.push(
        "-subject_surf",
        execution.inputFile((params["subject_surf"] ?? null))
    );
    cargs.push(
        "-out",
        (params["output"] ?? null)
    );
    if ((params["annot_in"] ?? null) !== null) {
        cargs.push(
            "--annot_in",
            execution.inputFile((params["annot_in"] ?? null))
        );
    }
    if ((params["annot_out"] ?? null) !== null) {
        cargs.push(
            "--annot_out",
            (params["annot_out"] ?? null)
        );
    }
    return cargs;
}


function mris_resample_outputs(
    params: MrisResampleParameters,
    execution: Execution,
): MrisResampleOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MrisResampleOutputs = {
        root: execution.outputFile("."),
        resampled_surface_output: execution.outputFile([(params["output"] ?? null)].join('')),
        resampled_annotation_output: ((params["annot_out"] ?? null) !== null) ? execution.outputFile([(params["annot_out"] ?? null)].join('')) : null,
    };
    return ret;
}


function mris_resample_execute(
    params: MrisResampleParameters,
    execution: Execution,
): MrisResampleOutputs {
    /**
     * Resample cortical surfaces in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MrisResampleOutputs`).
     */
    params = execution.params(params)
    const cargs = mris_resample_cargs(params, execution)
    const ret = mris_resample_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mris_resample(
    atlas_reg: InputPathType,
    subject_reg: InputPathType,
    subject_surf: InputPathType,
    output: string,
    annot_in: InputPathType | null = null,
    annot_out: string | null = null,
    runner: Runner | null = null,
): MrisResampleOutputs {
    /**
     * Resample cortical surfaces in FreeSurfer.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param atlas_reg Atlas spherical registration file.
     * @param subject_reg Subject spherical registration file.
     * @param subject_surf Subject actual surface.
     * @param output Output resampled surface.
     * @param annot_in Input annotation (for the subject). If present, output annotation must be present as well.
     * @param annot_out Output annotation (for the resampled atlas). If present, input annotation must be present as well.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MrisResampleOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRIS_RESAMPLE_METADATA);
    const params = mris_resample_params(atlas_reg, subject_reg, subject_surf, output, annot_in, annot_out)
    return mris_resample_execute(params, execution);
}


export {
      MRIS_RESAMPLE_METADATA,
      MrisResampleOutputs,
      MrisResampleParameters,
      mris_resample,
      mris_resample_params,
};
