// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const FILM_CIFTI_METADATA: Metadata = {
    id: "5f6fb11fedf9a9f15e724807d8d7ff9bb2a45c2b.boutiques",
    name: "film_cifti",
    package: "fsl",
    container_image_tag: "brainlife/fsl:6.0.4-patched2",
};


interface FilmCiftiParameters {
    "__STYXTYPE__": "film_cifti";
    "input_filename": InputPathType;
    "basename": string;
    "left_surface": InputPathType;
    "right_surface": InputPathType;
    "susan_threshold"?: number | null | undefined;
    "susan_extent"?: number | null | undefined;
    "surface_sigma"?: number | null | undefined;
    "surface_extent"?: number | null | undefined;
    "film_options"?: string | null | undefined;
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
        "film_cifti": film_cifti_cargs,
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
        "film_cifti": film_cifti_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `film_cifti(...)`.
 *
 * @interface
 */
interface FilmCiftiOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output results file
     */
    output_results: OutputPathType;
}


function film_cifti_params(
    input_filename: InputPathType,
    basename: string,
    left_surface: InputPathType,
    right_surface: InputPathType,
    susan_threshold: number | null = null,
    susan_extent: number | null = null,
    surface_sigma: number | null = null,
    surface_extent: number | null = null,
    film_options: string | null = null,
): FilmCiftiParameters {
    /**
     * Build parameters.
    
     * @param input_filename Input CIFTI file
     * @param basename Output basename
     * @param left_surface Geometry for left cortex
     * @param right_surface Geometry for right cortex
     * @param susan_threshold Susan brightness threshold for volumetric analysis (default: 0)
     * @param susan_extent Susan mask size for volumetric analysis (default: 4)
     * @param surface_sigma Smoothing sigma for surface analysis (default: 0)
     * @param surface_extent Smoothing extent for surface analysis (default: 4)
     * @param film_options Film options to be used with all modes, list must be wrapped by quotes
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "film_cifti" as const,
        "input_filename": input_filename,
        "basename": basename,
        "left_surface": left_surface,
        "right_surface": right_surface,
    };
    if (susan_threshold !== null) {
        params["susan_threshold"] = susan_threshold;
    }
    if (susan_extent !== null) {
        params["susan_extent"] = susan_extent;
    }
    if (surface_sigma !== null) {
        params["surface_sigma"] = surface_sigma;
    }
    if (surface_extent !== null) {
        params["surface_extent"] = surface_extent;
    }
    if (film_options !== null) {
        params["film_options"] = film_options;
    }
    return params;
}


function film_cifti_cargs(
    params: FilmCiftiParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("film_cifti");
    cargs.push(
        "-i",
        execution.inputFile((params["input_filename"] ?? null))
    );
    cargs.push(
        "-o",
        (params["basename"] ?? null)
    );
    cargs.push(
        "-l",
        execution.inputFile((params["left_surface"] ?? null))
    );
    cargs.push(
        "-r",
        execution.inputFile((params["right_surface"] ?? null))
    );
    if ((params["susan_threshold"] ?? null) !== null) {
        cargs.push(
            "--st",
            String((params["susan_threshold"] ?? null))
        );
    }
    if ((params["susan_extent"] ?? null) !== null) {
        cargs.push(
            "--sm",
            String((params["susan_extent"] ?? null))
        );
    }
    if ((params["surface_sigma"] ?? null) !== null) {
        cargs.push(
            "--ss",
            String((params["surface_sigma"] ?? null))
        );
    }
    if ((params["surface_extent"] ?? null) !== null) {
        cargs.push(
            "--se",
            String((params["surface_extent"] ?? null))
        );
    }
    if ((params["film_options"] ?? null) !== null) {
        cargs.push(
            "--filmOptions",
            (params["film_options"] ?? null)
        );
    }
    return cargs;
}


function film_cifti_outputs(
    params: FilmCiftiParameters,
    execution: Execution,
): FilmCiftiOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: FilmCiftiOutputs = {
        root: execution.outputFile("."),
        output_results: execution.outputFile([(params["basename"] ?? null), "_results.nii.gz"].join('')),
    };
    return ret;
}


function film_cifti_execute(
    params: FilmCiftiParameters,
    execution: Execution,
): FilmCiftiOutputs {
    /**
     * A tool for statistical analysis of CIFTI files using FILM.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `FilmCiftiOutputs`).
     */
    params = execution.params(params)
    const cargs = film_cifti_cargs(params, execution)
    const ret = film_cifti_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function film_cifti(
    input_filename: InputPathType,
    basename: string,
    left_surface: InputPathType,
    right_surface: InputPathType,
    susan_threshold: number | null = null,
    susan_extent: number | null = null,
    surface_sigma: number | null = null,
    surface_extent: number | null = null,
    film_options: string | null = null,
    runner: Runner | null = null,
): FilmCiftiOutputs {
    /**
     * A tool for statistical analysis of CIFTI files using FILM.
     * 
     * Author: FMRIB Analysis Group, University of Oxford
     * 
     * URL: https://fsl.fmrib.ox.ac.uk/fsl/fslwiki
    
     * @param input_filename Input CIFTI file
     * @param basename Output basename
     * @param left_surface Geometry for left cortex
     * @param right_surface Geometry for right cortex
     * @param susan_threshold Susan brightness threshold for volumetric analysis (default: 0)
     * @param susan_extent Susan mask size for volumetric analysis (default: 4)
     * @param surface_sigma Smoothing sigma for surface analysis (default: 0)
     * @param surface_extent Smoothing extent for surface analysis (default: 4)
     * @param film_options Film options to be used with all modes, list must be wrapped by quotes
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `FilmCiftiOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(FILM_CIFTI_METADATA);
    const params = film_cifti_params(input_filename, basename, left_surface, right_surface, susan_threshold, susan_extent, surface_sigma, surface_extent, film_options)
    return film_cifti_execute(params, execution);
}


export {
      FILM_CIFTI_METADATA,
      FilmCiftiOutputs,
      FilmCiftiParameters,
      film_cifti,
      film_cifti_params,
};
