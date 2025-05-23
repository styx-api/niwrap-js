// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MRI_MARK_TEMPORAL_LOBE_METADATA: Metadata = {
    id: "75e6e60a85ce6a2bfb0234747d1412e2709192d8.boutiques",
    name: "mri_mark_temporal_lobe",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MriMarkTemporalLobeParameters {
    "__STYXTYPE__": "mri_mark_temporal_lobe";
    "spacing"?: string | null | undefined;
    "use_gradient": boolean;
    "subjects": Array<InputPathType>;
    "output_file": string;
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
        "mri_mark_temporal_lobe": mri_mark_temporal_lobe_cargs,
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
        "mri_mark_temporal_lobe": mri_mark_temporal_lobe_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mri_mark_temporal_lobe(...)`.
 *
 * @interface
 */
interface MriMarkTemporalLobeOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Marked temporal lobe output file
     */
    output_file: OutputPathType;
}


function mri_mark_temporal_lobe_params(
    subjects: Array<InputPathType>,
    output_file: string,
    spacing: string | null = null,
    use_gradient: boolean = false,
): MriMarkTemporalLobeParameters {
    /**
     * Build parameters.
    
     * @param subjects Subject MRI images
     * @param output_file Output file for marked temporal lobes
     * @param spacing The spacing of classifiers in canonical space
     * @param use_gradient Flag to use intensity gradient as input to classifier
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mri_mark_temporal_lobe" as const,
        "use_gradient": use_gradient,
        "subjects": subjects,
        "output_file": output_file,
    };
    if (spacing !== null) {
        params["spacing"] = spacing;
    }
    return params;
}


function mri_mark_temporal_lobe_cargs(
    params: MriMarkTemporalLobeParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mri_mark_temporal_lobe");
    if ((params["spacing"] ?? null) !== null) {
        cargs.push(
            "-spacing",
            (params["spacing"] ?? null)
        );
    }
    if ((params["use_gradient"] ?? null)) {
        cargs.push(["-gradient", (params["subjects"] ?? null).map(f => execution.inputFile(f)).join(""), (params["output_file"] ?? null)].join(''));
    }
    return cargs;
}


function mri_mark_temporal_lobe_outputs(
    params: MriMarkTemporalLobeParameters,
    execution: Execution,
): MriMarkTemporalLobeOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MriMarkTemporalLobeOutputs = {
        root: execution.outputFile("."),
        output_file: execution.outputFile([(params["output_file"] ?? null)].join('')),
    };
    return ret;
}


function mri_mark_temporal_lobe_execute(
    params: MriMarkTemporalLobeParameters,
    execution: Execution,
): MriMarkTemporalLobeOutputs {
    /**
     * A tool for marking the temporal lobe in MRI images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MriMarkTemporalLobeOutputs`).
     */
    params = execution.params(params)
    const cargs = mri_mark_temporal_lobe_cargs(params, execution)
    const ret = mri_mark_temporal_lobe_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mri_mark_temporal_lobe(
    subjects: Array<InputPathType>,
    output_file: string,
    spacing: string | null = null,
    use_gradient: boolean = false,
    runner: Runner | null = null,
): MriMarkTemporalLobeOutputs {
    /**
     * A tool for marking the temporal lobe in MRI images.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param subjects Subject MRI images
     * @param output_file Output file for marked temporal lobes
     * @param spacing The spacing of classifiers in canonical space
     * @param use_gradient Flag to use intensity gradient as input to classifier
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MriMarkTemporalLobeOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MRI_MARK_TEMPORAL_LOBE_METADATA);
    const params = mri_mark_temporal_lobe_params(subjects, output_file, spacing, use_gradient)
    return mri_mark_temporal_lobe_execute(params, execution);
}


export {
      MRI_MARK_TEMPORAL_LOBE_METADATA,
      MriMarkTemporalLobeOutputs,
      MriMarkTemporalLobeParameters,
      mri_mark_temporal_lobe,
      mri_mark_temporal_lobe_params,
};
